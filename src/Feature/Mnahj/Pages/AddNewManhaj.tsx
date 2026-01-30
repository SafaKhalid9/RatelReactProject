import { useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import ManhajForm from "../Components/ManhajForm";
import { useAddManhaj } from "../Services/manhaj.service";
import type { ManhajFormData } from "../Types/manhaj.types";

const AddManhaj = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useAddManhaj();

  const submit = (data: ManhajFormData) => {
    mutate(data, {
      onSuccess: () => navigate("/dashboard/manhajs"),
    });
  };

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-10 border-t-secondary mt-[7%]">
      <div dir="rtl">
        <CustomFormTitle title="إضافة منهج جديد" />
        <ManhajForm mode="add" onSubmit={submit} isLoading={isPending} />
      </div>
    </div>
  );
};

export default AddManhaj;
