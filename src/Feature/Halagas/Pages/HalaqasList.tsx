import { useState } from "react";
import { Link } from "react-router-dom";
import { useHalaqas } from "../Services/halaqa.service";
import HalaqasTable from "../Components/HalaqasTable";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomButton from "@/Components/CustomButton";
import { Input } from "@/Components/ShadCn/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ShadCn/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ShadCn/pagination";

const HalaqasList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [nameSearch, setNameSearch] = useState("");

  // Debounce logic for search ideally, but simple state for now

  const { data, isLoading, isError } = useHalaqas({
    page,
    pageSize,
    name: nameSearch || undefined,
  });

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex justify-between items-center">
        <CustomFormTitle
          title="Halaqas Management"
          // subTitle="Manage your study groups"
        />
        <Link to="/dashboard/halaqas/add">
          <CustomButton>Add New Halaqa</CustomButton>
        </Link>
      </div>

      <div className="flex gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="w-1/3">
          <Input
            placeholder="Search by name..."
            value={nameSearch}
            onChange={(e) => {
              setNameSearch(e.target.value);
              setPage(1); // Reset to page 1 on search
            }}
          />
        </div>

        {/* Placeholder for Teacher/Year filters if data was available */}
        <div className="w-1/4">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Academic Year (All)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024-2025</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading && <div className="text-center py-10">Loading halaqas...</div>}
      {isError && (
        <div className="text-center py-10 text-red-500">
          Error loading halaqas.
        </div>
      )}

      {!isLoading && !isError && data && (
        <>
          <HalaqasTable
            data={data?.data || (Array.isArray(data) ? data : [])}
          />

          {/* Pagination Controls */}
          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    className={
                      page === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink>{page}</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setPage((p) => p + 1)}
                    className="cursor-pointer"
                  />
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
