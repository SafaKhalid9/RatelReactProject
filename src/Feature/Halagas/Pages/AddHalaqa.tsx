import { useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import HalaqaForm from "../Components/HalaqaForm";
import {
  useAddHalaqa,
  useMemorizationPaths,
  useManhajs,
} from "../Services/halaqa.service";
import type { HalaqaFormData } from "../Types/halaqa.types";

const AddHalaqa = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useAddHalaqa();
  const { data: paths } = useMemorizationPaths();
  const { data: manhajs } = useManhajs();

  const handleSubmit = (formData: HalaqaFormData) => {
    const payload = {
      name: formData.name,
      status:
        formData.status === "مبتدئ"
          ? "Beginner"
          : formData.status === "متوسط"
          ? "Intermediate"
          : "Advanced",
      capacity: formData.capacity,
      teacherID: formData.teacherID,
      period: formData.period,
      pathID: formData.selectedPathIds[0] || 0,
      manhajID: formData.selectedManhajIds[0] || 0,
      selectedPathIds: formData.selectedPathIds,
      selectedManhajIds: formData.selectedManhajIds,
    };

    console.log("Payload JSON:", JSON.stringify(payload, null, 2));

    mutate(payload, {
      onSuccess: () => {
        navigate("/dashboard/halaqas");
      },
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-[10px] border-t-[var(--secondary)]">
      <div className="p-6" dir="rtl">
        <CustomFormTitle title="إضافة حلقة جديدة" />
        <HalaqaForm mode="add" onSubmit={handleSubmit} isLoading={isPending} />
      </div>
    </div>
  );
};

export default AddHalaqa;
