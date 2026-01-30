import { useEffect, useState } from "react";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";
import AppPagination from "@/Components/Dashboard/CustomPagination";
import ManhajsTable from "../Components/ManhajsTable";
import { useManhajs } from "../Services/manhaj.service";

const ManhajsList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(7);
  const [nameSearch, setNameSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState(nameSearch);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(nameSearch);
    }, 300);

    return () => clearTimeout(handler);
  }, [nameSearch]);

  const { data, isLoading, isError } = useManhajs({
    page,
    pageSize,
    name: debouncedSearch || undefined,
  });

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex justify-center">
        <CustomFormTitle title="إدارة المناهج" />
      </div>

      <CustomAddButtonAndSearch
        path="/dashboard/manhajs/add-new-manhaj"
        textButton="إضافة منهج"
        searchValue={nameSearch}
        onSearchChange={(e) => {
          setNameSearch(e.target.value);
          setPage(1);
        }}
      />

      {isLoading && <div className="py-10 text-center">جاري التحميل...</div>}
      {isError && (
        <div className="py-10 text-center text-red-500">
          خطأ في تحميل المناهج
        </div>
      )}

      {!isLoading && !isError && data && (
        <>
          <ManhajsTable list={data.data} />

          <AppPagination
            page={page}
            setPage={setPage}
            disableNext={page >= data.pagination.totalPages}
          />
        </>
      )}
    </div>
  );
};

export default ManhajsList;
