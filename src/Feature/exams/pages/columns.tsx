import { type ColumnDef } from "@tanstack/react-table";
import type { ExamType } from "../types/examsType";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ShadCn/dropdown-menu";

import { Link } from "react-router-dom";
import DeleteDailog from "@/Components/deleteDailog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ShadCn/tooltip";
import { Badge } from "@/Components/ShadCn/badge";

export const columns: ColumnDef<ExamType>[] = [
  {
    accessorKey: "halaqaNames",
    header: "اسم الحلقة",
    cell: ({ row }) => {
      const halaqaName = row.original.halaqaNames;
      const firstHalaqaName = halaqaName?.[0] || "لا يوجد";
      return (
        <Tooltip>
          <TooltipTrigger className="cursor-pointer ">
            <Badge className="font-bold">{firstHalaqaName}</Badge>
          </TooltipTrigger>
          <TooltipContent className="bg-white">
            {halaqaName?.map((name, index) => (
              <p className="text-center" key={index}>
                {name}
              </p>
            ))}
          </TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    accessorKey: "manhajNames",
    header: "اسم المنهج",
    cell: ({ row }) => {
      const manhajName = row.original.manhajNames;
      const firstManhajName = manhajName?.[0] || "لا يوجد";
      return (
        <Tooltip>
          <TooltipTrigger className="cursor-pointer ">
            <Badge className="font-bold">{firstManhajName}</Badge>
          </TooltipTrigger>
          <TooltipContent className="bg-white">
            {manhajName?.map((name, index) => (
              <p className="text-center" key={index}>
                {name}
              </p>
            ))}
          </TooltipContent>
        </Tooltip>
      );
    },
  },
  {
    accessorKey: "examTypeName",
    header: "نوع الاختبار",
  },
  {
    accessorKey: "examCategory",
    header: "تصنيف الاختبار",
  },
  {
    accessorKey: "examDegree",
    header: "الدرجة",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const exam = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="sr-only">Open menu</span>
              <ChevronDown className="size-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-white border-none rounded-2xl"
            align="end"
          >
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link
                  className="cursor-pointer"
                  to={`/dashboard/exams/view/${exam.id}`}
                >
                  عرض تفاصيل الاختبار
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  className="cursor-pointer"
                  to={`/dashboard/exams/edit/${exam.id}`}
                >
                  تعديل معلومات الاختبار
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DeleteDailog
                  id={exam.id}
                  name="حذف الاختبار"
                  keys={["exams"]}
                  url="/exams"
                />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
