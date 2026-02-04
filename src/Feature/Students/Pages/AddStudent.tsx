import { useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import StudentForm from "../Components/StudentForm";
import { useAddStudent, useHalaqas, useParents } from "../Services/student.service";
import { useQueryClient } from "@tanstack/react-query";
import type { StudentFormData } from "../Types/student.types";

const AddStudent = () => {
  const queryClient = useQueryClient(); 

  const { data: halaqas = [] } = useHalaqas();
  const { data: parents = [] } = useParents();

  const navigate = useNavigate();
  const { mutateAsync: addStudent, isPending } = useAddStudent();

  const handleSubmit = async (data: StudentFormData) => {
    try {
      await addStudent(data);
      queryClient.invalidateQueries({ queryKey: ["students"] });
      queryClient.invalidateQueries({ queryKey: ["parents"] });

      navigate("/dashboard/students");
    } catch (error) {
      console.error("Failed to add student", error);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-[10px] border-t-[var(--secondary)]">
      <CustomFormTitle title="إضافة طالب جديد" />
      <StudentForm
        mode="add"
        onSubmit={handleSubmit}
        isLoading={isPending}
        halaqaList={halaqas}
        parentsList={parents}
      />
    </div>
  );
};

export default AddStudent;
