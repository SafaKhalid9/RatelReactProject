import { type ColumnDef } from "@tanstack/react-table";
import type { UserType } from "../types/usersType";
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

export const columns: ColumnDef<UserType>[] = [
  {
    accessorKey: "userName",
    header: "اسم المستخدم",
  },
  {
    accessorKey: "isMojaz",
    header: "مجاز؟",
    cell: ({ row }) => {
      const isMojaz = row.original.isMojaz;
      return isMojaz ? "نعم" : "لا";
    },
  },
  {
    accessorKey: "roles",
    header: "الدور",
  },
  {
    accessorKey: "address",
    header: "الموقع",
  },
  {
    accessorKey: "phoneNumber",
    header: "رقم الجوال",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;
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
                  to={`/dashboard/users/view/${user.id}`}
                >
                  عرض تفاصيل المستخدم
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  className="cursor-pointer"
                  to={`/dashboard/users/edit/${user.id}`}
                >
                  تعديل معلومات المستخدم
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <DeleteDailog
                  id={user.id}
                  name="حذف المستخدم"
                  keys={["users"]}
                  url="/users"
                />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
