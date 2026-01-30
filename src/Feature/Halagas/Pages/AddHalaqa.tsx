import { useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import HalaqaForm from "../Components/HalaqaForm";
import { useAddHalaqa } from "../Services/halaqa.service";
import type { HalaqaFormData } from "../Types/halaqa.types";

const AddHalaqa = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useAddHalaqa();

  const submit = (data: HalaqaFormData) => {
    mutate(data, {
      onSuccess: () => navigate("/dashboard/halaqas"),
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-10 border-t-secondary">
      <div className="p-6" dir="rtl">
        <CustomFormTitle title="إضافة حلقة جديدة" />
        <HalaqaForm mode="add" onSubmit={submit} isLoading={isPending} />
      </div>
    </div>
  );
};

export default AddHalaqa;
