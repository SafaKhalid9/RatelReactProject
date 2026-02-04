import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import DisplayFilters from "@/Components/Dashboard/CustomDateAndSearch";
import TeacherAttendanceTable from "../components/TeacherAttendanceTable"; 

const TeacherAttendanceList = () => {
  return (
    <div className="flex flex-col gap-6 p-5" dir="rtl">
      <div className="flex justify-center">
        <CustomFormTitle title="تحضير المعلمين" />
      </div>

      <DisplayFilters 
      />

      <div className="mt-4">
        <TeacherAttendanceTable />
      </div>

      <div className="flex justify-center mt-4 opacity-50 pointer-events-none">
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded">السابق</button>
          <button className="px-3 py-1 bg-gray-100 border rounded">1</button>
          <button className="px-3 py-1 border rounded">التالي</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendanceList;