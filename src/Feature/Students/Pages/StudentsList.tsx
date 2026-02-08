import { useState } from "react";
import { useStudents } from "../Services/student.service";
import StudentsTable from "../Components/StudentsTable";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";
import AppPagination from "@/Components/Dashboard/CustomPagination";

const StudentsList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(7);
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useStudents({
    page,
    pageSize,
    search: search || undefined,
  });

  const students = data?.data || [];

  if (isError)
    return (
      <div className="text-center text-red-500 py-10">
        حدث خطأ أثناء تحميل البيانات
      </div>
    );

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full">
      <CustomFormTitle title="إدارة الطلاب" />

      <CustomAddButtonAndSearch
        path="/dashboard/students/add"
        textButton="إضافة طالب جديد"
        searchValue={search}
        onSearchChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {isLoading ? (
        <div className="text-center py-10">جاري التحميل...</div>
      ) : (
        <>
          <StudentsTable listOfStudents={students} />

          <AppPagination
            page={page}
            setPage={setPage}
            disableNext={page >= (data?.pagination?.totalPages ?? 1)}
          />
        </>
      )}
    </div>
  );
};
export default StudentsList;
