import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import AppreciationGradeForm from "../Components/AppreciationGradeForm";
import { useParams } from "react-router-dom";
import { useAppreciationGrade } from "../Services/appreciationGrade.service";

const ViewAppreciationGrade = () => {
  const { id } = useParams<{ id: string }>();
  const { data: grade, isLoading } = useAppreciationGrade(Number(id));

  if (isLoading) return <div className="p-8 text-center">جاري التحميل...</div>;

  return (
    <div className="border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm">
      <CustomFormTitle title="تفاصيل التقدير" />
      <div className="mt-6">
        <AppreciationGradeForm
          defaultValues={grade}
          onSubmit={() => {}}
          isLoading={false}
          mode="view"
        />
      </div>
    </div>
  );
};

export default ViewAppreciationGrade;
