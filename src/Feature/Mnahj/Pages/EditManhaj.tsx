import { useParams, useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import ManhajForm from "../Components/ManhajForm";
import {
  toFormData,
  useManhajDetails,
  useUpdateManhaj,
} from "../Services/manhaj.service";
import type { ManhajFormData } from "../Types/manhaj.types";

const EditManhaj = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const manhajId = Number(id);

  const { data, isLoading } = useManhajDetails(manhajId);
  const { mutate, isPending } = useUpdateManhaj();

  if (isLoading) return <div className="p-10">جاري التحميل...</div>;
  if (!data) return <div className="p-10 text-red-500">غير موجود</div>;

  const defaultValues: ManhajFormData = {
    name: data.name,
    authorName: data.authorName,
    targetAudience: data.targetAudience,
    numberOfLessons: Number(data.numberOfLessons || 0),
    goals: data.goals,
  };

  const submit = (form: ManhajFormData) => {
    const formData = toFormData(form);

    mutate(
      { id: manhajId, data: formData },
      {
        onSuccess: () => navigate("/dashboard/manhajs"),
      },
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-10 border-t-secondary mt-[7%]">
      <div dir="rtl">
        <CustomFormTitle title="تعديل المنهج" />
        <ManhajForm
          mode="edit"
          defaultValues={defaultValues}
          onSubmit={submit}
          isLoading={isPending}
        />
      </div>
    </div>
  );
};

export default EditManhaj;
