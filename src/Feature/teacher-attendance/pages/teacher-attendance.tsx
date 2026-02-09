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

  const { data, isLoading, isError } = useTeacherAttendance({
    date,
    shiftType: shift,
    page,
    pageSize: 10,
    search: search || undefined,
  });

  const { mutate: saveAttendance, isPending: isSaving } = useAddUpdateAttendance();
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
      <CustomFormTitle title="تحضير المعلمين" />
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
           <div className="flex justify-center items-center my-8">
              <div className="bg-[#6B705C] p-1 rounded-full shadow-md">
                <Button 
                  onClick={handleSave} 
                  disabled={isSaving || localData.length === 0}
                  size="lg" 
                  className="min-w-[180px] h-10 rounded-full font-bold text-lg text-white bg-[#6B705C] hover:bg-[#5a5e4d] border-none shadow-none transition-all active:scale-95"
                >
                  {isSaving ? (
                    <span className="flex items-center gap-3">
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      جاري الحفظ...
                    </span>
                  ) : (
                    "حفظ التحضير"
                  )}
                </Button>
              </div>
            </div>
            <AppPagination page={page} setPage={setPage} disableNext={page >= (data?.pagination?.totalPages ?? 1)} />
          </>
        )}
      </div>
    </div>
  );
};

export default TeacherAttendanceList;