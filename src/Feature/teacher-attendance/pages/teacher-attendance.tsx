import { useState, useEffect, useMemo } from "react";
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
    search: search,
  });

  const { mutate: saveAttendance, isPending: isSaving } = useAddUpdateAttendance();

  useEffect(() => {
    if (data?.data) {
      setLocalData(data.data);
    }
  }, [data]);

  const availability = useMemo(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const currentHour = now.getHours();

    if (date !== today) return { allowed: false, reason: "لا يمكن التحضير لغير تاريخ اليوم" };
    
    if (shift === "Morning" && currentHour >= 12) 
      return { allowed: false, reason: "انتهى وقت التحضير للفترة الصباحية" };
    
    if (shift === "Evening" && currentHour < 12) 
      return { allowed: false, reason: "لم يبدأ وقت التحضير للفترة المسائية بعد" };

    return { allowed: true, reason: "" };
  }, [date, shift]);

  const handleStatusChange = (teacherId: number, halaqaId: number, newStatus: string) => {
    if (!availability.allowed) return;
    setLocalData(prev => 
      prev.map(item => 
        (item.teacherId === teacherId && item.halaqaId === halaqaId) 
        ? { ...item, attendanceStatus: newStatus } 
        : item
      )
    );
  };

  const handleSave = () => {
    if (!availability.allowed) {
      alert(availability.reason);
      return;
    }

    const itemsToSave = localData
      .filter(item => item.attendanceStatus !== null)
      .map(item => ({
        teacherId: item.teacherId,
        halaqaId: item.halaqaId,
        attendanceStatus: item.attendanceStatus
      }));

    if (itemsToSave.length === 0) {
      alert("يرجى اختيار حالة التحضير لمعلم واحد على الأقل");
      return;
    }

    saveAttendance({ date, shiftType: shift, items: itemsToSave });
  };

  if (isError) return <div className="text-center text-red-500 py-10">حدث خطأ في الاتصال بالسيرفر</div>;

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full" dir="rtl">
      <CustomFormTitle title="تحضير المعلمين" />
      <DisplayFilters 
        dateValue={date}
        onDateChange={(e) => { setDate(e.target.value); setPage(1); }}
        shiftValue={shift}
        onShiftChange={(val) => { setShift(val); setPage(1); }}
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-2">
        {!availability.allowed && (
          <div className="bg-amber-50 border border-amber-200 text-amber-700 p-3 rounded-lg mb-4 text-center font-bold">
            ⚠️ {availability.reason}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-20 animate-pulse">جاري جلب قائمة المعلمين...</div>
        ) : (
          <>
            <TeacherAttendanceTable 
              data={localData} 
              onStatusChange={(item, status) => handleStatusChange(item.teacherId, item.halaqaId, status)}
              isUpdating={isSaving}
              readonly={!availability.allowed}
            />
            <div className="flex justify-center items-center my-8">
               <Button 
                  onClick={handleSave} 
                  disabled={isSaving || localData.length === 0 || !availability.allowed}
                  className="min-w-[200px] h-12 rounded-full text-white font-bold text-lg bg-[#6B705C] hover:bg-[#5a5e4d]"
                >
                  {isSaving ? "جاري الحفظ..." : availability.allowed ? "حفظ التحضير" : "حفظ غير متاح"}
                </Button>
            </div>
            <AppPagination page={page} setPage={setPage} disableNext={page >= (data?.pagination?.totalPages ?? 1)} />
          </>
        )}
      </div>
    </div>
  );
};

export default TeacherAttendanceList;