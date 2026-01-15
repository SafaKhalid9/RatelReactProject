import { useNavigate, useParams } from "react-router-dom";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import ExamForm from "../Components/ExamForm";
import { useExamDetails, useUpdateExam } from "../Services/exam.service";
import { ExamFormData } from "../Types/exam.types";
import { useEffect } from "react";

const EditExam = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const examId = Number(id);

  const {
    data: details,
    isLoading: isLoadingDetails,
    isError,
  } = useExamDetails(examId);
  const { mutateAsync: updateExam, isPending } = useUpdateExam();

  useEffect(() => {
    if (isError) {
      navigate("/dashboard/exams");
    }
  }, [isError, navigate]);

  const handleSubmit = async (data: ExamFormData) => {
    try {
      await updateExam({ id: examId, data });
      navigate("/dashboard/exams");
    } catch (error) {
      console.error("Failed to update exam", error);
    }
  };

  if (isLoadingDetails) {
    return <div className="p-10 text-center">جاري تحميل البيانات...</div>;
  }

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full">
      <CustomFormTitle text="تعديل الاختبار" />
      <div className="bg-white p-5 rounded-lg shadow-sm">
        {details && (
          <ExamForm
            mode="edit"
            defaultValues={{
              examDegree: details.examDegree,
              halaqaId: details.halaqaId,
              manhajId: details.manhajId,
              startDateTime: details.startDateTime,
              endDateTime: details.endDateTime,
              // If backend doesn't return userId in details, we might need a fallback or different field
              userId: details.userId,
              notes: details.notes,
              examTypeId: details.examTypeId,
              examCategory: details.examCategory,
            }}
            onSubmit={handleSubmit}
            isLoading={isPending}
          />
        )}
      </div>
    </div>
  );
};

export default EditExam;
