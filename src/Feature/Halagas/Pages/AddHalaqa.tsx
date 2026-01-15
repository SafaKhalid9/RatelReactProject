import { useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import HalaqaForm from "../Components/HalaqaForm";
import { useAddHalaqa } from "../Services/halaqa.service";
import { HalaqaFormData } from "../Types/halaqa.types";

const AddHalaqa = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useAddHalaqa();

  const handleSubmit = (data: HalaqaFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/dashboard/halaqas"); // Adjust route as needed
      },
    });
  };

  return (
    <div className="bg-white rounded-lg p-5">
      <CustomFormTitle
        title="Add New Halaqa"
        subTitle="Create a new study group"
      />
      <HalaqaForm mode="add" onSubmit={handleSubmit} isLoading={isPending} />
    </div>
  );
};

export default AddHalaqa;
