import { useParams } from "react-router-dom";
import { useGetExamDetails } from "../services/useGetExamDetails";
import { Skeleton } from "@/Components/ShadCn/skeleton";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";

export default function ViewExam() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>لا يوجد معرف صالح</div>;
  }
  const { data, isLoading } = useGetExamDetails(id);

  if (isLoading) {
    return (
      <div className="p-4">
        <CustomFormTitle title="تفاصيل الاختبار" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!data?.data) {
    return <div>لا يوجد بيانات</div>;
  }

  const {
    examDegree,
    halaqaNames,
    manhajNames,
    startDateTime,
    endDateTime,
    notes,
    examTypeName,
    examCategory,
  } = data.data;

  return (
    <div className="p-4">
      <CustomFormTitle title="تفاصيل الاختبار" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto mt-8">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">اسم الحلقة</label>
          <p className="p-3 rounded-md bg-gray-100 text-base">
            {halaqaNames.join(", ")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">اسم المنهج</label>
          <p className="p-3 rounded-md bg-gray-100 text-base">
            {manhajNames.join(", ")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">نوع الاختبار</label>
          <p className="p-3 rounded-md bg-gray-100 text-base">{examTypeName}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">تصنيف الاختبار</label>
          <p className="p-3 rounded-md bg-gray-100 text-base">{examCategory}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">الدرجة</label>
          <p className="p-3 rounded-md bg-gray-100 text-base">{examDegree}</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">تاريخ البدء</label>
          <p className="p-3 rounded-md bg-gray-100 text-base">
            {new Date(startDateTime).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-lg">تاريخ الانتهاء</label>
          <p className="p-3 rounded-md bg-gray-100 text-base">
            {new Date(endDateTime).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col md:col-span-2 gap-2">
          <label className="font-semibold text-lg">ملاحظات</label>
          <p className="p-3 rounded-md bg-gray-100 text-base min-h-[100px]">
            {notes}
          </p>
        </div>
      </div>
    </div>
  );
}
