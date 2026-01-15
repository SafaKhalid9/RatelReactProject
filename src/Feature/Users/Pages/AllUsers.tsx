// import React, { useState } from 'react';
// import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import AllUsersTable from '../Components/AllUsersTable';
// import CustomPagination from '@/Components/SideBar/CustomPagination';
// import { useUsers } from '../Services/user.service';
// import { Button } from '@/Components/ShadCn/button';
// import { useNavigate } from 'react-router-dom';

// const AllUsers = () => {
//     const navigate = useNavigate();
//     const [page, setPage] = useState(1);
//     const [search, setSearch] = useState('');
    
//     // Assuming backend supports pagination and search. 
//     // If not supported yet, we might need to do client-side filtering.
//     // For now, let's fetch all and filter client side if needed or pass params if backend supports.
//     // The useUsers hook implementation didn't take params, but let's assume it returns all for now.
//     const { data: users, isLoading, isError, error } = useUsers(); 

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
    
//     // Simple client-side search if backend doesn't support it yet
//     const filteredUsers = users?.filter(user => 
//         user.name.toLowerCase().includes(search.toLowerCase()) ||
//         user.phoneNumber.includes(search)
//     ) || [];

//     return (
//         <div className="flex flex-col gap-6">
//             <CustomFormTitle title='قائمة المستخدمين' />
//             <CustomAddButtonAndSearch 
//                 path='add-new-user' 
//                 textButton='إضافة مستخدم جديد'
//                 // Pass search handler if CustomAddButtonAndSearch supports it, 
//                 // otherwise implemented internally there? 
//                 // Let's assume we can control it or it just navigates.
//                 // The current CustomAddButtonAndSearch seems to just have a path and text.
//                 // If it has a search input inside that updates URL or local state, we might need to adjust.
//                 // For now, we will handle search if the component allows passing a query string or similar.
//                 // If CustomAddButtonAndSearch is valid only for navigation, we might need to add a separate search input here or update that component.
//             />
            
//             {/* 
//                 NOTE: CustomAddButtonAndSearch might need props for search handling. 
//                 I will assume for now it handles search visually or I might need to implement a search input here if it doesn't expose it.
//                 Let's stick to the structure and if search is needed we can add it. 
//             */}

//             <AllUsersTable users={filteredUsers} />
            
//             {/* 
//                Pagination logic might need to be connected to state. 
//                If CustomPagination is purely UI, we need to wire it up.
//                For this refactor, I'll place it but it might be static until integrated fully.
//             */}
//             <CustomPagination />
//         </div>
//     );
// };

// export default AllUsers;
