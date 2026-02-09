// import { DefaultDataTable } from "@/Components/ShadCn/data-table";
// import { useGetAppreciationGrades } from "../services/useGetAppreciationGrades";
// import { columns } from "./columns";
// import { Button } from "@/Components/ShadCn/button";
// import { PlusIcon } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";

// export default function AppreciationGrades() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { data, isLoading } = useGetAppreciationGrades({
//     page: currentPage,
//     pageSize: 10,
//   });

//   const totalPages = data?.data.pagination.totalPages || 1;
//   const handlePageChange = (page: number) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };
//   return (
//     <div>
//       {/* <h1 className="text-3xl font-bold text-center mt-10 mb-8">
//         قائمة درجات التقدير
//       </h1> */}
//       <CustomFormTitle title="قائمة الاختبارات" />
//       <div className="flex items-center justify-between gap-5 mb-5">
//         <Link to="/dashboard/appreciation-grades/add">
//           <Button
//             // variant="outline"
//             className="flex items-center gap-2 cursor-pointer bg-[#6B705C] hover:bg-[#6B705C]/80 text-white rounded font-bold hover:text-white "
//           >
//             <PlusIcon />
//             اضافة تقدير جديد
//           </Button>
//         </Link>
//       </div>
//       <DefaultDataTable
//         columns={columns}
//         data={data?.data.data || []}
//         isLoading={isLoading}
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }
