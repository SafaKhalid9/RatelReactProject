import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ShadCn/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

type AppPaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  disableNext?: boolean;
};

export default function AppPagination({
  page,
  setPage,
  disableNext = false,
}: AppPaginationProps) {
  return (
    <div className="mt-4" dir="rtl">
      <Pagination>
        <PaginationContent className="flex justify-center gap-x-5">
          <PaginationItem>
            <PaginationLink
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className={`flex items-center gap-1 ${
                page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
              }`}
            >
              <ChevronRight className="h-4 w-4" />
              السابق
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink isActive>{page}</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              onClick={() => !disableNext && setPage((p) => p + 1)}
              className={`flex items-center gap-1 ${
                disableNext
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }`}
            >
              التالي
              <ChevronLeft className="h-4 w-4" />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
