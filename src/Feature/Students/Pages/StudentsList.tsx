// import { useState } from 'react';
// import { useStudents } from '../Services/student.service';
// import StudentsTable from '../Components/StudentsTable';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
// import CustomPagination from '@/Components/SideBar/CustomPagination';

// const StudentsList = () => {
//     const [page, setPage] = useState(1);
//     const [pageSize] = useState(10);
//     const [searchName, setSearchName] = useState('');
    
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const { data: responseData, isLoading, isError } = useStudents({
//       page,
//       pageSize,
//       name: searchName
//     });
  
//     // Check various response structures
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const students = (responseData as any)?.data || (responseData as any)?.items || (Array.isArray(responseData) ? responseData : []);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const totalPages = (responseData as any)?.totalPages || 1;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const hasNext = (responseData as any)?.hasNextPage ?? (page < totalPages);
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const hasPrevious = (responseData as any)?.hasPreviousPage ?? (page > 1);

//     if (isError) {
//         return <div className="text-center text-red-500 py-10">حدث خطأ أثناء تحميل البيانات</div>;
//     }

//     return (
//         <div className='flex flex-col gap-5 p-5 bg-background h-full'>
//             <CustomFormTitle text='إدارة الطالبات' />
            
//             <CustomAddButtonAndSearch 
//                 link='/dashboard/students/add' 
//                 placeholder='بحث باسم الطالبة...'
//                 // If CustomAddButtonAndSearch doesn't support onChange, we might need a custom search input here
//                 // Assuming it does nothing with search for now unless we refactor it or use a separate input. 
//                 // Previous features likely ignored search or implemented it inside. 
//                 // Let's rely on standard practice or add a separate input if needed.
//                 // For now, let's assume it's just visual or we need to add a real search input next to it.
//             />

//             {/* Temporary Search Input if the component above doesn't expose logic */}
//              <div className="mb-4">
//                 <input 
//                     type="text" 
//                     placeholder="بحث سريع..." 
//                     className="p-2 border rounded w-1/3"
//                     value={searchName}
//                     onChange={(e) => setSearchName(e.target.value)}
//                 />
//             </div>

//             {isLoading ? (
//                 <div className="text-center py-10">جاري التحميل...</div>
//             ) : (
//                 <>
//                     <StudentsTable listOfStudents={students} />
                    
//                     <CustomPagination 
//                         page={page}
//                         setPage={setPage}
//                         totalPages={totalPages}
//                         hasNext={hasNext}
//                         hasPrevious={hasPrevious}
//                     />
//                 </>
//             )}
//         </div>
//     );
// };

// export default StudentsList;





// import { useState } from "react";
// import { useStudents } from "../Services/student.service";
// import StudentsTable from "../Components/StudentsTable";
// import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
// import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";
// import AppPagination from "@/Components/Dashboard/CustomPagination";

// const StudentsList = () => {
//   const [page, setPage] = useState(1);
//   const [pageSize] = useState(10);
//   const [search, setSearch] = useState("");

//   const { data, isLoading, isError } = useStudents({
//     page,
//     pageSize,
//     name: search || undefined,
//     halaqaId: undefined, // يمكن لاحقاً تضيفي فلتر بالحلقات
//   });

//   // البيانات الجاهزة للجدول
//   const students = data?.data || [];

//   // Pagination
//   const totalPages = data?.pagination?.totalPages || 1;
//   const disableNext = data?.pagination?.page >= totalPages;

//   if (isError)
//     return (
//       <div className="text-center text-red-500 py-10">
//         حدث خطأ أثناء تحميل البيانات
//       </div>
//     );

//   return (
//     <div className="flex flex-col gap-5 p-5 bg-background h-full">
//       <CustomFormTitle title="إدارة الطالبات" />

//       <CustomAddButtonAndSearch
//         path="/dashboard/students/add"
//         textButton="إضافة طالبة جديدة"
//         searchValue={search}
//         onSearchChange={(e) => {
//           setSearch(e.target.value);
//           setPage(1); // reset page on search
//         }}
//       />

//       {isLoading ? (
//         <div className="text-center py-10">جاري التحميل...</div>
//       ) : (
//         <>
//           <StudentsTable listOfStudents={students} />
//           <AppPagination
//             page={page}
//             setPage={setPage}
//             disableNext={disableNext}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default StudentsList;



import { useState } from "react";
import { useStudents } from "../Services/student.service";
import StudentsTable from "../Components/StudentsTable";
import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import CustomAddButtonAndSearch from "@/Components/Dashboard/CustomAddButtonAndSearch";
import AppPagination from "@/Components/Dashboard/CustomPagination";

const StudentsList = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useStudents({
    page,
    pageSize,
    name: search || undefined,
    halaqaId: undefined,
  });

  // البيانات الجاهزة للجدول
  const students = data?.data || [];

  // Pagination مع Optional Chaining لتجنب errors
  const totalPages = data?.pagination?.totalPages || 1;
  const disableNext = (data?.pagination?.page || 0) >= totalPages;

  if (isError)
    return (
      <div className="text-center text-red-500 py-10">
        حدث خطأ أثناء تحميل البيانات
      </div>
    );

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full">
      <CustomFormTitle title="إدارة الطالبات" />

      <CustomAddButtonAndSearch
        path="/dashboard/students/add"
        textButton="إضافة طالبة جديدة"
        searchValue={search}
        onSearchChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset page on search
        }}
      />

      {isLoading ? (
        <div className="text-center py-10">جاري التحميل...</div>
      ) : (
        <>
          <StudentsTable listOfStudents={students} />
          <AppPagination
            page={page}
            setPage={setPage}
            disableNext={disableNext}
          />
        </>
      )}
    </div>
  );
};

export default StudentsList;
