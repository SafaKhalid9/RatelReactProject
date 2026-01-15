// import React from 'react';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import UserForm from '../Components/UserForm';
// import { useAddUser } from '../Services/user.service';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { UserFormData } from '../Types/user.types';

// const AddNewUser = () => {
//     const addUserMutation = useAddUser();
//     const navigate = useNavigate();

//     const handleSubmit = async (data: UserFormData) => {
//         try {
//             await addUserMutation.mutateAsync(data);
//             toast.success('تم إضافة المستخدم بنجاح');
//             navigate('/users');
//         } catch (error) {
//             toast.error('حدث خطأ أثناء إضافة المستخدم');
//             console.error(error);
//         }
//     };

//     return (
//         <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
//             <CustomFormTitle title='إضافة مستخدم جديد' />
//             <div className="mt-6">
//                 <UserForm
//                     onSubmit={handleSubmit}
//                     isLoading={addUserMutation.isPending}
//                     mode="create"
//                 />
//             </div>
//         </div>
//     );
// };

// export default AddNewUser;

import CustomFormTitle from "@/Components/Dashboard/CustomFormTitle";
import UserForm from "../Components/UserForm";
import { BASE_URL } from "@/Constant/route";

const AddNewUser = () => {
  console.log(BASE_URL);

  return (
    <div className="border-t-15 border-[#CB997E] rounded-2xl bg-white">
      <CustomFormTitle title="إضافة مستخدم جديد" />
      <UserForm />
    </div>
  );
};

export default AddNewUser;
