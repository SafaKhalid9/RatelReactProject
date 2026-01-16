// import { useParams, useNavigate } from "react-router-dom";
// import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
// import HalaqaForm from "../Components/HalaqaForm";
// import { useHalaqaDetails, useUpdateHalaqa } from "../Services/halaqa.service";
// import type { HalaqaFormData } from "../Types/halaqa.types";

// const EditHalaqa = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data: details, isLoading: isLoadingDetails } = useHalaqaDetails(
//     Number(id)
//   );
//   const { mutate, isPending } = useUpdateHalaqa();

//   if (isLoadingDetails)
//     return <div className="p-10 text-center">جاري تحميل البيانات</div>;
//   if (!details)
//     return (
//       <div className="p-10 text-center text-red-500">الحلقة غير موجودة</div>
//     );

//   // const defaultValues: HalaqaFormData = {
//   //   name: details.name,
//   //   status: details.status,
//   //   capacity: details.capacity,
//   //   teacherID: details.teacherId,
//   //   period: details.period,
//   //   selectedPathIds: details.paths.map((p) => p.pathId),
//   //   selectedManhajIds: details.manhajs.map((m) => m.manhajId),
//   // };
//   // const defaultValues: HalaqaFormData = {
//   //   name: details.name || "",
//   //   status: details.status || "مبتدئ",
//   //   capacity: details.capacity || 10,
//   //   teacherID: details.teacherId || 0,
//   //   period: details.period || "صباحية",
//   //   selectedPathIds: details.paths?.map((p) => p.pathId) || [],
//   //   selectedManhajIds: details.manhajs?.map((m) => m.manhajId) || [],
//   // };

// const defaultValues: HalaqaFormData | undefined =
//   details &&
//   teachers ? {  // تأكد أن teachers جاهزون
//     name: details.name || "",
//     status: details.status || "مبتدئ",
//     capacity: details.capacity || 10,
//     teacherID:
//       teachers.find(t => t.fullName === details.teacherName)?.id || 0,
//     period: details.period || "",
//     selectedPathIds: details.paths?.map(p => p.pathId) || [],
//     selectedManhajIds: details.manhajs?.map(m => m.manhajId) || [],
//   } : undefined;

//   const handleSubmit = (data: HalaqaFormData) => {
//     mutate(
//       { id: Number(id), data },
//       {
//         onSuccess: () => {
//           navigate("/dashboard/halaqas");
//         },
//       }
//     );
//   };

//   // return (
//   //   <div className="bg-white rounded-lg p-5">
//   //     <CustomFormTitle
//   //       title="Edit Halaqa"
//   //       // subTitle="Update existing study group"
//   //     />
//   //     <HalaqaForm
//   //       mode="edit"
//   //       defaultValues={defaultValues}
//   //       onSubmit={handleSubmit}
//   //       isLoading={isPending}
//   //     />
//   //   </div>
//   // );
//   return (
//     <div className="bg-white shadow-sm rounded-[15px] border-t-[10px] border-t-[var(--secondary)]">
//       <div className="p-6" dir="rtl">
//         <CustomFormTitle title="تعديل الحلقة" />
//         <HalaqaForm
//           mode="edit"
//           defaultValues={defaultValues}
//           onSubmit={handleSubmit}
//           isLoading={isPending}
//         />
//       </div>
//     </div>
//   );
// };

// export default EditHalaqa;
import { useParams, useNavigate } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import HalaqaForm from "../Components/HalaqaForm";
import {
  useHalaqaDetails,
  useUpdateHalaqa,
  useTeachers,
} from "../Services/halaqa.service";
import type { HalaqaFormData } from "../Types/halaqa.types";

const EditHalaqa = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: details, isLoading: isLoadingDetails } = useHalaqaDetails(
    Number(id)
  );
  const { data: teachers, isLoading: loadingTeachers } = useTeachers();
  const { mutate, isPending } = useUpdateHalaqa();

  if (isLoadingDetails || loadingTeachers)
    return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
  if (!details)
    return (
      <div className="p-10 text-center text-red-500">الحلقة غير موجودة</div>
    );

  const teacherIdFromName =
    teachers?.find((t) => t.fullName === details.teacherName)?.id ||
    details.teacherId ||
    0;

  const defaultValues: HalaqaFormData = {
    name: details.name || "",
    status: details.status || "مبتدئ",
    capacity: details.capacity || 10,
    teacherID: teacherIdFromName,
    period: details.period || "صباحية",
    selectedPathIds: details.paths?.map((p) => p.pathId) || [],
    selectedManhajIds: details.manhajs?.map((m) => m.manhajId) || [],
  };

  const handleSubmit = (data: HalaqaFormData) => {
    mutate(
      { id: Number(id), data },
      { onSuccess: () => navigate("/dashboard/halaqas") }
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
