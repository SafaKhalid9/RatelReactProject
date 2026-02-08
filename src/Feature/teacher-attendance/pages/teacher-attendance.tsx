// import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
// import DisplayFilters from "@/Components/Dashboard/CustomDateAndSearch";
// import TeacherAttendanceTable from "../components/TeacherAttendanceTable"; 

// const TeacherAttendanceList = () => {
//   return (
//     <div className="flex flex-col gap-6 p-5" dir="rtl">
//       <div className="flex justify-center">
//         <CustomFormTitle title="تحضير المعلمين" />
//       </div>

//       <DisplayFilters 
//       />

//       <div className="mt-4">
//         <TeacherAttendanceTable />
//       </div>

//       <div className="flex justify-center mt-4 opacity-50 pointer-events-none">
//         <div className="flex gap-2">
//           <button className="px-3 py-1 border rounded">السابق</button>
//           <button className="px-3 py-1 bg-gray-100 border rounded">1</button>
//           <button className="px-3 py-1 border rounded">التالي</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherAttendanceList;









// import { useState } from "react";
// import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
// import DisplayFilters from "@/Components/Dashboard/CustomDateAndSearch";
// import TeacherAttendanceTable from "../components/TeacherAttendanceTable"; 
// import { useTeacherAttendance, useUpdateAttendance } from "../services/teacherAttendance.service";
// import type { TeacherAttendanceItem } from "../types/teacherAttendance.types";
// import AppPagination from "@/Components/Dashboard/CustomPagination"; // التأكد من المسار الصحيح

// const TeacherAttendanceList = () => {
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [pageSize] = useState(10);

//   // 1. جلب البيانات
//   const { data, isLoading, isError } = useTeacherAttendance({
//     date,
//     page,
//     pageSize,
//     search: search || undefined,
//   });

//   // 2. هوك التحديث
//   const { mutate: updateStatus, isPending } = useUpdateAttendance();

//   const handleStatusChange = (item: TeacherAttendanceItem, newStatus: string) => {
//     updateStatus({
//       teacherId: item.teacherId,
//       halaqaId: item.halaqaId,
//       status: newStatus,
//       date: date,
//     });
//   };

//   if (isError) return (
//     <div className="text-center text-red-500 py-10 font-bold">حدث خطأ أثناء تحميل بيانات التحضير</div>
//   );

//   return (
//     <div className="flex flex-col gap-5 p-5 bg-background h-full" dir="rtl">
//       <CustomFormTitle title="تحضير المعلمين" />

//       {/* الفلاتر (التاريخ والبحث) */}
//       <DisplayFilters 
//         dateValue={date}
//         onDateChange={(e) => { setDate(e.target.value); setPage(1); }}
//         searchValue={search}
//         onSearchChange={(e) => { setSearch(e.target.value); setPage(1); }}
//       />

//       <div className="mt-2">
//         {isLoading ? (
//           <div className="text-center py-20">جاري التحميل...</div>
//         ) : (
//           <>
//             <TeacherAttendanceTable 
//               data={data?.data || []} 
//               onStatusChange={handleStatusChange}
//               isUpdating={isPending}
//             />

//             {/* الباجينيشن بنفس نمط الطلاب */}
//             <AppPagination
//               page={page}
//               setPage={setPage}
//               disableNext={page >= (data?.pagination?.totalPages ?? 1)}
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TeacherAttendanceList;






import { useState, useEffect } from "react";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import DisplayFilters from "@/Components/Dashboard/CustomDateAndSearch";
import TeacherAttendanceTable from "../components/TeacherAttendanceTable"; 
import { useTeacherAttendance, useAddUpdateAttendance } from "../services/teacherAttendance.service";
import type { TeacherAttendanceItem } from "../types/teacherAttendance.types";
import AppPagination from "@/Components/Dashboard/CustomPagination";
import { Button } from "@/Components/ShadCn/button";

const TeacherAttendanceList = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [shift, setShift] = useState("Morning");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [localData, setLocalData] = useState<TeacherAttendanceItem[]>([]);
  // const [localData, setLocalData] = useState<any[]>([]);

  const { data, isLoading, isError } = useTeacherAttendance({
    date,
    shiftType: shift,
    page,
    pageSize: 10,
    search: search || undefined,
  });

  const { mutate: saveAttendance, isPending: isSaving } = useAddUpdateAttendance();

  // تحديث البيانات المحلية عند تحميل بيانات جديدة من السيرفر
  useEffect(() => {
    if (data?.data) {
      setLocalData(data.data);
    }
  }, [data]);

  const handleStatusChange = (teacherId: number, halaqaId: number, newStatus: string) => {
    setLocalData(prev => 
      prev.map(item => 
        (item.teacherId === teacherId && item.halaqaId === halaqaId) 
        ? { ...item, attendanceStatus: newStatus } 
        : item
      )
    );
  };

  const handleSave = () => {
    saveAttendance({
      date,
      shiftType: shift,
      items: localData.map(item => ({
        teacherId: item.teacherId,
        halaqaId: item.halaqaId,
        attendanceStatus: item.attendanceStatus || "Present"
      }))
    });
  };

  if (isError) return <div className="text-center text-red-500 py-10 font-bold">حدث خطأ أثناء تحميل البيانات</div>;

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full" dir="rtl">
      <div className="flex justify-between items-center">
        <CustomFormTitle title="تحضير المعلمين" />
        <Button onClick={handleSave} disabled={isSaving || localData.length === 0}>
          {isSaving ? "جاري الحفظ..." : "حفظ الكل"}
        </Button>
      </div>

      <DisplayFilters 
        dateValue={date}
        onDateChange={(e) => { setDate(e.target.value); setPage(1); }}
        shiftValue={shift}
        onShiftChange={(val) => { setShift(val); setPage(1); }}
        searchValue={search}
        onSearchChange={(e) => { setSearch(e.target.value); setPage(1); }}
      />

      <div className="mt-2">
        {isLoading ? (
          <div className="text-center py-20">جاري التحميل...</div>
        ) : (
          <>
            <TeacherAttendanceTable 
              data={localData} 
              onStatusChange={(item, status) => handleStatusChange(item.teacherId, item.halaqaId, status)}
              isUpdating={isSaving}
            />
            <AppPagination page={page} setPage={setPage} disableNext={page >= (data?.pagination?.totalPages ?? 1)} />
          </>
        )}
      </div>
    </div>
  );
};

export default TeacherAttendanceList;