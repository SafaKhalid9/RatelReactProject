import { useState } from "react";
import { Link } from "react-router-dom";
import { useHalaqas } from "../Services/halaqa.service";
import HalaqasTable from "../Components/HalaqasTable";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomButton from "@/Components/CustomButton";
import { Input } from "@/Components/ShadCn/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/Components/ShadCn/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ShadCn/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";

const HalaqasList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(7);
  const [nameSearch, setNameSearch] = useState("");

  // Debounce logic for search ideally, but simple state for now

  const { data, isLoading, isError } = useHalaqas({
    page,
    pageSize,
    name: nameSearch || undefined,
  });

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex justify-center items-center">
        <CustomFormTitle title="إدارة الحلقات" />
      </div>
      {/* <div className="w-1/4">
          <Select disabled>
            <SelectTrigger className=" bg-white px-2 py-2">
              <SelectValue placeholder="السنة الدراسية" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024-2025</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      <CustomAddButtonAndSearch
        path="/dashboard/halaqas/add"
        textButton="إضافة حلقة"
        searchValue={nameSearch}
        onSearchChange={(e) => {
          setNameSearch(e.target.value);
          setPage(1);
        }}
      />

      {isLoading && <div className="text-center py-10">جاري التحميل...</div>}
      {isError && (
        <div className="text-center py-10 text-red-500">
          خطأ في تحميل الحلقات.
        </div>
      )}

      {!isLoading && !isError && data && (
        <>
          <HalaqasTable
            data={data?.data || (Array.isArray(data) ? data : [])}
          />
          {/* ----------------------------------------------------------------------------------------------------------------- */}
          {/* Pagination Controls */}
          <div className="mt-4" dir="rtl">
            <Pagination>
              <PaginationContent className="flex justify-center gap-x-5">
                {/* السابق */}
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className={`flex items-center gap-1 ${
                      page === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }`}
                  >
                    <ChevronRight className="h-4 w-4" />
                    السابق
                  </PaginationLink>
                </PaginationItem>

                {/* رقم الصفحة */}
                <PaginationItem>
                  <PaginationLink isActive>{page}</PaginationLink>
                </PaginationItem>

                {/* التالي */}
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setPage((p) => p + 1)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    التالي
                    <ChevronLeft className="h-4 w-4" />
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </>
      )}
    </div>
  );
};

export default HalaqasList;
