import { DefaultDataTable } from "@/Components/ShadCn/data-table";
import { useGetExams } from "../services/useGetExams";
import { columns } from "./columns";
import { useState } from "react";
import { Button } from "@/Components/ShadCn/button";
import { PlusIcon } from "lucide-react";
import { Input } from "@/Components/ShadCn/input";
import { Link } from "react-router-dom";

export default function Exams() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetExams({
    page: currentPage,
    pageSize: 10,
    name: search,
  });
  const totalPages = data?.data.pagination.totalPages || 1;
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10 mb-8">
        قائمة الاختبارات
      </h1>
      <div className="flex items-center justify-between gap-5 mb-5">
        <Link to="/dashboard/exams/add">
          <Button
            variant="outline"
            className="flex items-center gap-2 cursor-pointer bg-[#6B705C] hover:bg-[#6B705C]/80 text-white rounded font-bold hover:text-white "
          >
            <PlusIcon />
            اضافة اختبار جديد
          </Button>
        </Link>
        <Input
          placeholder="بحث"
          className="bg-white border-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <DefaultDataTable
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        columns={columns}
        data={data?.data.data || []}
        isLoading={isLoading}
      />
    </div>
  );
}
