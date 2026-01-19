import { useState } from "react";
import { useMemorizationPaths } from "../Services/memorizationPath.service";
import MemorizationPathsTable from "../Components/MemorizationPathsTable";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";
import AppPagination from "@/Components/Dashboard/CustomPagination";

const AllMemorizationPaths = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(7);
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useMemorizationPaths({
    page,
    pageSize,
    name: search || undefined,
    memorizeFrom: search || undefined,
    memorizeTo: search || undefined,
  });

  const paths = data?.data || [];

  if (isError)
    return (
      <div className="text-center text-red-500 py-10">
        حدث خطأ أثناء تحميل البيانات
      </div>
    );

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full">
      <CustomFormTitle title="قائمة مسارات الحفظ" />

      <CustomAddButtonAndSearch
        path="/dashboard/memorization-paths/add"
        textButton="إضافة مسار جديد"
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
          <MemorizationPathsTable listOfPaths={paths} />
          <AppPagination
            page={page}
            setPage={setPage}
            disableNext={data?.pagination?.page >= data?.pagination?.totalPages}
          />
        </>
      )}
    </div>
  );
};

export default AllMemorizationPaths;
