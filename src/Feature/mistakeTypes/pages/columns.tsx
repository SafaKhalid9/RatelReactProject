import { type ColumnDef } from "@tanstack/react-table";
import { type MistakeType } from "../types/mistakeTypes.types";
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

export const columns: ColumnDef<MistakeType>[] = [
  {
    accessorKey: "name",
    header: "اسم الخطأ",
  },
  {
    accessorKey: "degree",
    header: "الدرجة",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const mistakeType = row.original;
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
                  to={`/dashboard/mistake-types/edit/${mistakeType.id}`}
                >
                  تعديل معلومات نوع الخطأ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DeleteDailog
                  id={mistakeType.id}
                  name="حذف نوع الخطأ"
                  keys={["mistake-types"]}
                  url="/mistake-types"
                />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
