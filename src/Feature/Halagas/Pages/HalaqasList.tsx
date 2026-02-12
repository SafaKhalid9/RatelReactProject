import { useMemo, useState } from "react";
import { useHalaqas, useTeachers } from "../Services/halaqa.service";
import HalaqasTable from "../Components/HalaqasTable";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";
import AppPagination from "@/Components/Dashboard/CustomPagination";

const HalaqasList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(7);
  const [nameSearch, setNameSearch] = useState("");
  const { data, isLoading, isError } = useHalaqas({
    page,
    pageSize,
    name: nameSearch || undefined,
  });
  const { data: teachers } = useTeachers();
  const teachersMap = useMemo(() => {
    return new Map(teachers?.map((t) => [t.id, t.fullName]) ?? []);
  }, [teachers]);
  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex justify-center">
        <CustomFormTitle title="قائمة الحلقات" />
      </div>
      <CustomAddButtonAndSearch
        path="/dashboard/halaqas/add"
        textButton="إضافة حلقة جديدة"
        searchValue={nameSearch}
        onSearchChange={(e) => {
          setNameSearch(e.target.value);
          setPage(1);
        }}
      />
      {isLoading && <div className="text-center py-10">جاري التحميل...</div>}
      {isError && (
        <div className="text-center py-10 text-red-500">
          خطأ في تحميل الحلقات
        </div>
      )}
      {!isLoading && !isError && data && (
        <>
          <HalaqasTable data={data.data} teachersMap={teachersMap} />

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

export default HalaqasList;
