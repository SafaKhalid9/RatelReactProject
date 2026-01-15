// import React from 'react';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import UserForm from '../Components/UserForm';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useGetUser, useUpdateUser } from '../Services/user.service';
// import { toast } from 'sonner';
// import { UserFormData } from '../Types/user.types';

// const EditUser = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const { data: user, isLoading: isUserLoading } = useGetUser(id!);
//     const updateUserMutation = useUpdateUser();

//     const handleSubmit = async (data: UserFormData) => {
//         if (!id) return;
//         try {
//             await updateUserMutation.mutateAsync({ id, data });
//             toast.success('تم تحديث بيانات المستخدم بنجاح');
//             navigate('/users');
//         } catch (error) {
//             toast.error('حدث خطأ أثناء تحديث البيانات');
//             console.error(error);
//         }
//     };

//     if (isUserLoading) return <div>جاري التحميل...</div>;

//     return (
//         <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
//             <CustomFormTitle title='تعديل مستخدم' />
//              <div className="mt-6">
//                 <UserForm 
//                     defaultValues={user} 
//                     onSubmit={handleSubmit} 
//                     isLoading={updateUserMutation.isPending}
//                     mode="edit"
//                 />
//             </div>
//         </div>
//     );
// };

// export default EditUser;
