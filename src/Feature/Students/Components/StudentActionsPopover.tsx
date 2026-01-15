// import { LucideMoreVertical } from "lucide-react";
// import { Link } from "react-router-dom";
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/Components/ShadCn/popover";
// import { Button } from "@/Components/ShadCn/button";
// import { useDeleteStudent } from "../Services/student.service";
// import React from "react";

// interface StudentActionProps {
//     id: number;
// }

// const StudentActionsPopover: React.FC<StudentActionProps> = ({ id }) => {
//     const { mutateAsync: deleteStudent } = useDeleteStudent();
//     const [open, setOpen] = React.useState(false);

//     const handleDelete = async () => {
//         if (confirm("هل أنت متأكد من حذف هذه الطالبة؟")) {
//             await deleteStudent(id);
//             setOpen(false);
//         }
//     };

//     return (
//         <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//                 <Button variant="ghost" className="h-8 w-8 p-0">
//                     <LucideMoreVertical className="h-4 w-4" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-40 p-0" align="end">
//                 <div className="flex flex-col">
//                     <Link
//                         to={`/dashboard/students/view/${id}`}
//                         className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition-colors text-right"
//                         onClick={() => setOpen(false)}
//                     >
//                         عرض
//                     </Link>
//                     <Link
//                         to={`/dashboard/students/edit/${id}`}
//                         className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition-colors text-right"
//                         onClick={() => setOpen(false)}
//                     >
//                         تعديل
//                     </Link>
//                     <button
//                         onClick={handleDelete}
//                         className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm text-red-600 transition-colors text-right"
//                     >
//                         حذف
//                     </button>
//                 </div>
//             </PopoverContent>
//         </Popover>
//     );
// };

// export default StudentActionsPopover;
