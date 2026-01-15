import { useState } from "react";
import { useExams } from "../Services/exam.service";
import ExamsTable from "../Components/ExamsTable";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";
import CustomPagination from "@/Components/SideBar/CustomPagination";

const ExamsList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    data: responseData,
    isLoading,
    isError,
  } = useExams({
    page,
    pageSize,
  });

  // Defensive access
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exams =
    (responseData as any)?.data ||
    (responseData as any)?.items ||
    (Array.isArray(responseData) ? responseData : []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const totalPages = (responseData as any)?.totalPages || 1;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasNext = (responseData as any)?.hasNextPage ?? page < totalPages;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasPrevious = (responseData as any)?.hasPreviousPage ?? page > 1;

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        حدث خطأ أثناء تحميل البيانات
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full">
      <CustomFormTitle text="إدارة الاختبارات" />

      <CustomAddButtonAndSearch
        link="/dashboard/exams/add"
        placeholder="بحث..." // Placeholder as search API not explicitly requested yet but nice to have in UI
      />

      {isLoading ? (
        <div className="text-center py-10">جاري التحميل...</div>
      ) : (
        <>
          <ExamsTable listOfExams={exams} />

          <CustomPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
          />
        </>
      )}
    </div>
  );
};

export default ExamsList;
