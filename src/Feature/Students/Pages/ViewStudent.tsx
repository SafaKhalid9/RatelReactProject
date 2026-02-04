import { useParams } from "react-router-dom";
import { useStudentDetails } from "../Services/student.service";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";

const StudentInfo = () => {
  const { id } = useParams<{ id: string }>(); 
  const studentId = parseInt(id || "0");

  const { data: student, isLoading, error } = useStudentDetails(studentId);

  if (isLoading) return <div>جاري التحميل...</div>;
  if (error) return <div>حدث خطأ</div>;
  if (!student) return <div>لا توجد بيانات</div>;

  return (
  <div className="bg-white shadow-sm rounded-[15px] border-t-[10px] border-t-[var(--secondary)] p-6 flex flex-col items-center">

    <CustomFormTitle title="تفاصيل الطالب" />
    <img
      src="../../../../studentProfile.png"
      alt="student"
      className="w-34 h-34 rounded-full object-cover"
    />
    <h2 className="text-xl font-bold mt-3">{student.name}</h2>
    <div className="mt-6 space-y-2 text-center text-gray-800">

      <h3>تاريخ الميلاد: {new Date(student.birthDate).toLocaleDateString()}</h3>

      <h3>الهاتف: {student.phoneNumber}</h3>

      <h3>العنوان: {student.address}</h3>

      <h3>بداية الحفظ: {student.beginOfMemorize}</h3>

      <h3>المرحلة الدراسية: {student.currentEducationalLevel}</h3>

      <h3>المؤهل: {student.educationalQualification}</h3>

      <h3>الحلقة: {student.halaqaName}</h3>

      <h3>ولي الأمر: {student.parentName}</h3>

    </div>
  </div>
);

};

export default StudentInfo;
