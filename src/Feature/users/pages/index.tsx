import { DefaultDataTable } from "@/Components/ShadCn/data-table";
import { useGetUsers } from "../services/useGetUsers";
import { columns } from "./columns";
import { useState } from "react";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetUsers({
    page: currentPage,
    pageSize: 7,
    name: search,
  });
  const totalPages = data?.data.pagination.totalPages || 1;
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full">
      <CustomFormTitle title="قائمة المستخدمين" />

      <CustomAddButtonAndSearch
        path="/dashboard/users/add"
        textButton="إضافة مستخدم جديد"
        searchValue={search}
        onSearchChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {isLoading ? (
        <div className="text-center py-10">جاري التحميل...</div>
      ) : (
        <>
          <DefaultDataTable
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            columns={columns}
            data={data?.data.data || []}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
}
