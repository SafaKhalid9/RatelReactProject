// import React, { useState } from 'react';
// import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajsTable from '../Components/ManhajsTable';
// import CustomPagination from '@/Components/SideBar/CustomPagination';
// import { useManhajs } from '../Services/manhaj.service';
// import { Button } from '@/Components/ShadCn/button';

// const AllManhajs = () => {
//     const { data: manhajs, isLoading, isError, error } = useManhajs();
//     const [search, setSearch] = useState('');

//     if (isLoading) {
//         return <div className="p-8 text-center">جاري التحميل...</div>;
//     }

//     if (isError) {
//         return (
//             <div className="p-8 text-center text-red-500">
//                 حدث خطأ أثناء جلب البيانات: {error?.message}
//                 <br />
//                 <Button variant="outline" onClick={() => window.location.reload()} className="mt-4">
//                     إعادة المحاولة
//                 </Button>
//             </div>
//         );
//     }
    
//     const filteredManhajs = manhajs?.filter(manhaj => 
//         manhaj.name.toLowerCase().includes(search.toLowerCase()) ||
//         manhaj.authorName.toLowerCase().includes(search.toLowerCase())
//     ) || [];

//     return (
//         <div className="flex flex-col gap-6">
//             <CustomFormTitle title='قائمة المناهج' />
//             <CustomAddButtonAndSearch 
//                 path='add-new-manhaj' 
//                 textButton='إضافة منهج جديد'
//             />
            
//             <ManhajsTable manhajs={filteredManhajs} />
            
//             <CustomPagination />
//         </div>
//     );
// };

// export default AllManhajs;
 