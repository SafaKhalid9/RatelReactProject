// import React from 'react';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajForm from '../Components/ManhajForm';
// import { useAddManhaj } from '../Services/manhaj.service';
// import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
// import { ManhajFormData } from '../Types/manhaj.types';

// const AddNewManhaj = () => {
//     const addManhajMutation = useAddManhaj();
//     const navigate = useNavigate();

//     const handleSubmit = async (data: ManhajFormData) => {
//         try {
//             await addManhajMutation.mutateAsync(data);
//             toast.success('تم إضافة المنهج بنجاح');
//             // Check where to navigate. Assuming /dashboard/manhajs for now if I create it.
//              navigate('/dashboard/manhajs');
//         } catch (error) {
//             toast.error('حدث خطأ أثناء إضافة المنهج');
//             console.error(error);
//         }
//     };

//     return (
//         <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
//             <CustomFormTitle title='إضافة منهج جديد' />
//             <div className="mt-6">
//                 <ManhajForm 
//                     onSubmit={handleSubmit} 
//                     isLoading={addManhajMutation.isPending}
//                     mode="create"
//                 />
//             </div>
//         </div>
//     );
// };

// export default AddNewManhaj;