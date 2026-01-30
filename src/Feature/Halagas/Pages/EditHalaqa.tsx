import { useParams, useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import HalaqaForm from "../Components/HalaqaForm";
import { useHalaqa, useUpdateHalaqa } from "../Services/halaqa.service";
import type { HalaqaFormData, HalaqaStatus } from "../Types/halaqa.types";

const mapStatusFromApi = (status?: string): HalaqaStatus => {
  switch (status) {
    case "مبتدئ":
      return "Beginner";
    case "متوسط":
      return "Intermediate";
    case "متقدم":
      return "Advanced";
    default:
      return "Beginner";
  }
};

const EditHalaqa = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: details, isLoading } = useHalaqa(Number(id));
  const { mutate, isPending } = useUpdateHalaqa();

  if (isLoading) return <div className="p-10">جاري التحميل...</div>;
  if (!details) return <div className="p-10 text-red-500">غير موجود</div>;

  const defaultValues: HalaqaFormData = {
    name: details.name,
    period: details.period,
    status: mapStatusFromApi(details.status),
    capacity: details.capacity,
    teacherId: details.teacherId,
    pathIds: details.paths?.map((p: any) => p.pathId) ?? [],
    manhajIds: details.manhajs?.map((m: any) => m.manhajId) ?? [],
  };

  const handleSubmit = (formData: HalaqaFormData) => {
    mutate(
      { id: Number(id), data: formData },
      { onSuccess: () => navigate("/dashboard/halaqas") }
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-10 border-t-secondary">
      <div className="p-6" dir="rtl">
        <CustomFormTitle title="تعديل الحلقة" />
        <HalaqaForm
          key={details.id}
          mode="edit"
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          isLoading={isPending}
        />
      </div>
    </div>
  );
};

export default EditHalaqa;
