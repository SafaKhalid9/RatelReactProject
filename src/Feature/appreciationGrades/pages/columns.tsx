// import { type ColumnDef } from "@tanstack/react-table";
// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/Components/ShadCn/dropdown-menu";
// import { Link } from "react-router-dom";
// import DeleteDailog from "@/Components/deleteDailog";
// import type { AppreciationGrade } from "../types/appreciationGrades.types";

// // Helper to map ID to Name if API doesn't provide it
// const getAppreciationName = (id: number) => {
//   const mapping: Record<number, string> = {
//     1: "ممتاز مرتفع",
//     2: "ممتاز",
//     3: "جيد جداً مرتفع",
//     4: "جيد جداً",
//     5: "جيد مرتفع",
//     6: "جيد",
//     7: "مقبول مرتفع",
//     8: "مقبول",
//     9: "ضعيف",
//   };
//   return mapping[id] || `تقدير ${id}`;
// };

// export const columns: ColumnDef<AppreciationGrade>[] = [
//   {
//     accessorKey: "appreciationId",
//     header: "التقدير",
//     cell: ({ row }) => getAppreciationName(row.original.appreciationId),
//   },
//   {
//     accessorKey: "minimumScore",
//     header: "الدرجة الصغرى",
//   },
//   {
//     accessorKey: "maximumScore",
//     header: "الدرجة الكبرى",
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const grade = row.original;
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <div className="flex items-center gap-2 cursor-pointer">
//               <span className="sr-only">Open menu</span>
//               <ChevronDown className="size-5" />
//             </div>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent
//             className="bg-white border-none rounded-2xl"
//             align="end"
//           >
//             <DropdownMenuGroup>
//               <DropdownMenuItem asChild>
//                 <Link
//                   className="cursor-pointer"
//                   to={`/dashboard/appreciation-grades/edit/${grade.id}`}
//                 >
//                   تعديل التقدير
//                 </Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem asChild>
//                 <DeleteDailog
//                   id={grade.id}
//                   name="حذف التقدير"
//                   keys={["appreciation-grades"]}
//                   url="/appreciation-grades"
//                 />
//               </DropdownMenuItem>
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//   },
// ];
