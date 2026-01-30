"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type Row,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ShadCn/table";
import { Skeleton } from "./skeleton";
import { Button } from "./button";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowClick?: (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    row: Row<TData>,
  ) => void;
  isLoading?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function DefaultDataTable<TData, TValue>({
  columns,
  data,
  onRowClick,
  isLoading = false,
  currentPage,
  totalPages,
  onPageChange,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages,
  });

  // عدد صفوف السكيليتون الافتراضي عند التحميل
  const skeletonRowsCount = 5;

  const onRowClickHandler = useCallback(
    (
      event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
      row: Row<TData>,
    ) => {
      const target = event.target as HTMLElement;
      if (target.closest("td") && onRowClick) {
        onRowClick(event, row);
      }
    },
    [onRowClick],
  );

  return (
    <div>
      <div className="overflow-hidden  bg-white text-black">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-none bg-[#CB997E] hover:bg-[#CB997E]"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="font-bold px-2 py-4 text-right  text-white "
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {isLoading ? (
              [...Array(skeletonRowsCount)].map((_, i) => (
                <TableRow key={`sk-row-${i}`}>
                  {columns.map((_, j) => (
                    <TableCell key={`sk-cell-${j}`} className="px-2 py-4">
                      <Skeleton className="h-4 w-full animate-pulse rounded-md bg-gray-200" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={(e) => onRowClickHandler(e, row)}
                  className={cn("even:bg-muted/30 border-secondary ", {
                    "cursor-pointer": onRowClick,
                  })}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-2 py-4 ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-muted-foreground h-24 text-center"
                >
                  لا توجد نتائج
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-center space-x-1 py-4">
        {onPageChange && currentPage && (
          <div className="pagination-buttons">
            <Button
              variant="default"
              className="bg-white text-black"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              السابق
            </Button>

            {[...Array(totalPages || 0)].map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <Button
                  className={`mx-1 bg-white text-black ${pageNum === currentPage ? "bg-[#CB997E] text-white" : ""}`}
                  key={pageNum}
                  size="sm"
                  onClick={() => onPageChange(pageNum)}
                >
                  {pageNum}
                </Button>
              );
            })}

            <Button
              variant="default"
              className="bg-white text-black"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= (totalPages || 1)}
            >
              التالي
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
