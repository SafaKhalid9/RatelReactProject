// // import { useState } from 'react';
// // import { useMemorizationPaths } from '../Services/memorizationPath.service';
// // import MemorizationPathsTable from '../Components/MemorizationPathsTable';
// // import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// // import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
// // import CustomPagination from '@/Components/SideBar/CustomPagination';

// // const AllMemorizationPaths = () => {
// //     const [page, setPage] = useState(1);
// //     const [pageSize] = useState(10);
// //     // Assuming search might be supported later, but for now just pass page/size
    
// //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
// //     const { data: responseData, isLoading, isError, error } = useMemorizationPaths({
// //       page,
// //       pageSize,
// //     });
  
// //     // Defensive access to data
// //     // If backend returns { items: [...] } or { data: [...] } or just [...]
// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     const paths = (responseData as any)?.data || (responseData as any)?.items || (Array.isArray(responseData) ? responseData : []);
// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     const totalPages = (responseData as any)?.totalPages || 1;
// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     const hasNext = (responseData as any)?.hasNextPage ?? (page < totalPages);
// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     const hasPrevious = (responseData as any)?.hasPreviousPage ?? (page > 1);

// //     if (isError) {
// //         return <div className="text-center text-red-500 py-10">حدث خطأ أثناء تحميل البيانات</div>;
// //     }

// //     return (
// //         <div className='flex flex-col gap-5 p-5 bg-background h-full'>
// //             <CustomFormTitle title='قائمة مسارات الحفظ' />
            
// //             <CustomAddButtonAndSearch 
// //                 link='/dashboard/memorization-paths/add' 
// //                 placeholder='بحث باسم المسار...' // Search visual only for now as not connected
// //             />

// //             {isLoading ? (
// //                 <div className="text-center py-10">جاري التحميل...</div>
// //             ) : (
// //                 <>
// //                     <MemorizationPathsTable listOfPaths={paths} />
                    
// //                     {/* Reuse CustomPagination if possible, or construct Shadcn pagination */}
// //                     {/* Checking CustomPagination props: it likely takes setPage or links. 
// //                         Let's use the Shadcn one inline or verify CustomPagination */}
// //                     <CustomPagination 
// //                         page={page}
// //                         setPage={setPage} // Assuming it accepts setPage
// //                         totalPages={totalPages}
// //                         hasNext={hasNext}
// //                         hasPrevious={hasPrevious}
// //                     />
// //                 </>
// //             )}
// //         </div>
// //     );
// // };

// // export default AllMemorizationPaths;


// =================================================

// import { useState } from 'react';
// import { useMemorizationPaths } from '../Services/memorizationPath.service';
// import MemorizationPathsTable from '../Components/MemorizationPathsTable';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
// import CustomPagination from '@/Components/SideBar/CustomPagination';

// const AllMemorizationPaths = () => {
//   const [page, setPage] = useState(1);
//   const [pageSize] = useState(10);

//   const { data: responseData, isLoading, isError } = useMemorizationPaths({ page, pageSize });
//   const paths = responseData?.data || responseData?.items || [];
//   const totalPages = responseData?.totalPages || 1;

//   if (isError) {
//     return <div className="text-center text-red-500 py-10">حدث خطأ أثناء تحميل البيانات</div>;
//   }

//   return (
//     <div className="border-t-15 border-[#CB997E] rounded-2xl bg-white p-5 ">
//       <CustomFormTitle title="قائمة مسارات الحفظ" />

//       <CustomAddButtonAndSearch 
//         path="/dashboard/memorization-paths/add" 
//         textButton="إضافة مسار جديد"
//       />

//       {isLoading ? (
//         <div className="text-center py-10">جاري التحميل...</div>
//       ) : (
//         <>
//           <MemorizationPathsTable listOfPaths={paths} />

//           <CustomPagination 
//             page={page} 
//             setPage={setPage} 
//             totalPages={totalPages} 
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default AllMemorizationPaths;











import { useMemorizationPaths } from '../Services/memorizationPath.service';
import MemorizationPathsTable from '../Components/MemorizationPathsTable';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';

const AllMemorizationPaths = () => {
  const { data: responseData, isLoading, isError } = useMemorizationPaths({ page: 1, pageSize: 1000 }); // فقط نجيب كل البيانات
  const paths = responseData?.items || []; // تأكدي من اسم الحقل من API

  if (isError) {
    return <div className="text-center text-red-500 py-10">حدث خطأ أثناء تحميل البيانات</div>;
  }

  return (
    <div className="flex flex-col gap-5 p-5 bg-background h-full">
      <CustomFormTitle title="قائمة مسارات الحفظ" />

      <CustomAddButtonAndSearch 
        path="/dashboard/memorization-paths/add" 
        textButton="إضافة مسار جديد"
      />

      {isLoading ? (
        <div className="text-center py-10">جاري التحميل...</div>
      ) : (
        <MemorizationPathsTable listOfPaths={paths} />
      )}
    </div>
  );
};

export default AllMemorizationPaths;



// import { useState } from 'react';
// import { useMemorizationPaths } from '../Services/memorizationPath.service';
// import MemorizationPathsTable from '../Components/MemorizationPathsTable';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';

// const AllMemorizationPaths = () => {
//   const [page, setPage] = useState(1);
//   const pageSize = 10;

//   const { data, isLoading, isError } = useMemorizationPaths({ page, pageSize });
//   const paths = data?.paths || [];
//   const totalPages = data?.pagination?.totalPages || 1;

//   if (isError) {
//     return <div className="text-center text-red-500 py-10">حدث خطأ أثناء تحميل البيانات</div>;
//   }

//   return (
//     <div className="flex flex-col gap-5 p-5 bg-background h-full">
//       <CustomFormTitle title="قائمة مسارات الحفظ" />
//       <CustomAddButtonAndSearch 
//         path="/dashboard/memorization-paths/add" 
//         textButton="إضافة مسار جديد"
//       />

//       {isLoading ? (
//         <div className="text-center py-10">جاري التحميل...</div>
//       ) : (
//         <MemorizationPathsTable listOfPaths={paths} />
//       )}
//     </div>
//   );
// };

// export default AllMemorizationPaths;
