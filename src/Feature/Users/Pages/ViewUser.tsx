// import React from 'react';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import UserForm from '../Components/UserForm';
// import { useParams } from 'react-router-dom';
// import { useGetUser } from '../Services/user.service';

// const ViewUser = () => {
//     const { id } = useParams<{ id: string }>();
//     const { data: user, isLoading } = useGetUser(id!);

//     if (isLoading) return <div>جاري التحميل...</div>;

//     return (
//         <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
//             <CustomFormTitle title='تفاصيل المستخدم' />
//             <div className="mt-6">
//                 <UserForm 
//                     defaultValues={user} 
//                     onSubmit={() => {}} 
//                     isLoading={false}
//                     mode="view"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ViewUser;
