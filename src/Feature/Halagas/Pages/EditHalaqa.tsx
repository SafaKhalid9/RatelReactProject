import { useParams, useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import HalaqaForm from "../Components/HalaqaForm";
import {
  useHalaqa,
  useUpdateHalaqa,
  useTeachers,
} from "../Services/halaqa.service";
import type { HalaqaFormData, HalaqaStatus } from "../Types/halaqa.types";

const EditHalaqa = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: details, isLoading: isLoadingDetails } = useHalaqa(Number(id));
  const { data: teachers, isLoading: loadingTeachers } = useTeachers();
  const { mutate, isPending } = useUpdateHalaqa();

  if (isLoadingDetails || loadingTeachers)
    return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
  if (!details)
    return (
      <div className="p-10 text-center text-red-500">الحلقة غير موجودة</div>
    );
  // const mapStatusToForm = (status?: string): HalaqaStatus => {
  //   switch (status) {
  //     case "مبتدئ":
  //       return "Beginner";
  //     case "متوسط":
  //       return "Intermediate";
  //     case "متقدم":
  //       return "Advanced";
  //     default:
  //       return "Beginner";
  //   }
  // };

  // const teacherIdFromName =
  //   teachers?.find((t) => t.fullName === details.teacherName)?.id ||
  //   details.teacherId ||
  //   0;

  // const defaultValues: HalaqaFormData = {
  //   name: details.name || "",
  //   status: details.status || "مبتدئ",
  //   capacity: details.capacity || 10,
  //   teacherID: teacherIdFromName,
  //   period: details.period || "صباحية",
  //   selectedPathIds: details.paths?.map((p) => p.pathId) || [],
  //   selectedManhajIds: details.manhajs?.map((m) => m.manhajId) || [],
  // };
  // const teacherId =
  //   teachers?.find((t) => t.fullName === details.teacherName)?.id ?? 0;

  // const defaultValues: HalaqaFormData = {
  //   name: details.name || "",
  //   status: (details.status as HalaqaStatus) || "مبتدئ",
  //   capacity: details.capacity ?? 10,
  //   teacherID: teacherId,
  //   period: details.period || "",
  //   selectedPathIds: details.paths?.map((p) => p.pathId) || [],
  //   selectedManhajIds: details.manhajs?.map((m) => m.manhajId) || [],
  // };
  const teacherId =
    teachers?.find((t) => t.fullName === details.teacherName)?.id ?? 0;

  const defaultValues: HalaqaFormData = {
    name: details.name ?? "",
    period: details.period ?? "",
    status:
      details.status === "Beginner"
        ? "مبتدئ"
        : details.status === "Intermediate"
        ? "متوسط"
        : "متقدم",
    capacity: details.capacity ?? 10,
    teacherID: details.teacherId ?? teacherId,
    selectedPathIds: details.pathIds ?? [],
    selectedManhajIds: details.manhajIds ?? [],
  };

  // const handleSubmit = (data: HalaqaFormData) => {
  //   mutate(
  //     { id: Number(id), data },
  //     { onSuccess: () => navigate("/dashboard/halaqas") }
  //   );
  // };
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

    console.log("UPDATE PAYLOAD:", payload);

    mutate(
      {
        id: Number(id),
        data: payload as any,
      },
      {
        onSuccess: () => navigate("/dashboard/halaqas"),
      }
    );
  };

  return (
    <div className="bg-white shadow-sm rounded-[15px] border-t-[10px] border-t-[var(--secondary)]">
      <div className="p-6" dir="rtl">
        <CustomFormTitle title="تعديل الحلقة" />
        <HalaqaForm
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
