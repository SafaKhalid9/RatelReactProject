import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import StudentForm from "../Components/StudentForm";
import {
  useStudentDetails,
  useUpdateStudent,
  useParents,
  useHalaqas,
} from "../Services/student.service";
import type { StudentFormData } from "../Types/student.types";

const EditStudent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const studentId = Number(id);

  const { data: details, isLoading, isError } = useStudentDetails(studentId);
  const { data: halaqasList } = useHalaqas();
  const { data: parentsListData } = useParents();
  const { mutateAsync: updateStudent, isPending } = useUpdateStudent();

  const [mappedValues, setMappedValues] = useState<StudentFormData | null>(null);

  useEffect(() => {
    if (isError) navigate("/dashboard/students");
  }, [isError, navigate]);

  useEffect(() => {
  if (details) {
    setMappedValues({
      name: details.name,
      birthDate: details.birthDate.split("T")[0],
      phoneNumber: details.phoneNumber || "",
      address: details.address || "",
      beginOfMemorize: details.beginOfMemorize || "",
      currentEducationalLevel: details.currentEducationalLevel || "",
      educationalQualification: details.educationalQualification || "",
      halaqaId: details.halaqaId,
      parentId: details.parentId,
      addNewParent: false,
    });
  }
}, [details]);


  // useEffect(() => {
  //   if (details) {
  //     setMappedValues({
  //       name: details.name,
  //       birthDate: details.birthDate.split("T")[0],
  //       phoneNumber: details.phoneNumber || "",
  //       address: details.address || "",
  //       beginOfMemorize: "",
  //       currentEducationalLevel: details.currentEducationalLevel || "",
  //       educationalQualification: details.educationalQualification || "",
  //       halaqaId: details.halaqaId,
  //       parentId: details.parentId,
  //       addNewParent: false,
  //     });
  //   }
  // }, [details]);

  const handleSubmit = async (data: StudentFormData) => {
    await updateStudent({ id: studentId, data });
    navigate("/dashboard/students");
  };

  if (isLoading || !mappedValues) {
    return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
  }

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-[10px] border-t-[var(--secondary)]">
      <CustomFormTitle title="تعديل بيانات الطالب" />
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <StudentForm
          mode="edit"
          defaultValues={mappedValues}
          onSubmit={handleSubmit}
          isLoading={isPending}
          parentsList={parentsListData || []}
          halaqaList={halaqasList || []}
        />
      </div>
    </div>
  );
};

export default EditStudent;


















