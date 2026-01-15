// import React from 'react';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajForm from '../Components/ManhajForm';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useManhaj, useUpdateManhaj } from '../Services/manhaj.service';
// import { toast } from 'sonner';
// import { ManhajFormData } from '../Types/manhaj.types';

// const EditManhaj = () => {
//     const { id } = useParams<{ id: string }>();
//     const navigate = useNavigate();
//     const { data: manhaj, isLoading: isManhajLoading } = useManhaj(id!);
//     const updateManhajMutation = useUpdateManhaj();

//     const handleSubmit = async (data: ManhajFormData) => {
//         if (!id) return;
//         try {
//             await updateManhajMutation.mutateAsync({ id, data });
//             toast.success('تم تحديث المنهج بنجاح');
//             navigate('/dashboard/manhajs');
//         } catch (error) {
//             toast.error('حدث خطأ أثناء تحديث المنهج');
//             console.error(error);
//         }
//     };

//     if (isManhajLoading) return <div>جاري التحميل...</div>;

//     return (
//         <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white shadow-sm'>
//             <CustomFormTitle title='تعديل منهج' />
//             <div className="mt-6">
//                  {/* 
//                    Note: manhaj from API might have fields that match ManhajFormData partially 
//                    Assuming useManhaj returns Manhaj interface which is compatible with defaultValues partial ManhajFormData
//                 */}
//                 <ManhajForm 
//                     defaultValues={manhaj as any} // Cast if needed, or better map it 
//                     onSubmit={handleSubmit} 
//                     isLoading={updateManhajMutation.isPending}
//                     mode="edit"
//                 />
//             </div>
//         </div>
//     );
// };

// export default EditManhaj;

// // const EditManhaj = () => {
// //   const { id } = useParams<{ id: string }>();
// //   const manhajId = Number(id);

// //   const [defaultValues, setDefaultValues] = useState<any>(null);

// //   // جلب بيانات المنهج عند تحميل الصفحة
// //   useEffect(() => {
// //     const fetchManhaj = async () => {
// //       try {
// //         const res = await axios.get(`${BASE_URL}/manhajs/${manhajId}`);
// //         setDefaultValues({
// //           name: res.data.name,
// //           authorName: res.data.authorName,
// //           targetAudionce: res.data.targetAudionce,
// //           numberOfLessons: res.data.numberOfLessons,
// //           goals: res.data.goals,
// //         });
// //       } catch (error) {
// //         console.error(error);
// //         alert('حدث خطأ أثناء جلب بيانات المنهج');
// //       }
// //     };

// //     if (manhajId) fetchManhaj();
// //   }, [manhajId]);

// //   const handleEditManhaj = async (formData: FormData) => {
// //     try {
// //       await axios.put(`${BASE_URL}/manhajs/${manhajId}`, formData, {
// //         headers: { 'Content-Type': 'multipart/form-data' },
// //       });
// //       alert('تم تعديل المنهج بنجاح ✅');
// //     } catch (error) {
// //       console.error(error);
// //       alert('حدث خطأ أثناء التعديل ❌');
// //     }
// //   };

// //   if (!defaultValues) return <div>جاري التحميل...</div>;

// //   return (
// //     <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white pb-5'>
// //       <CustomFormTitle title='تعديل منهج' />

// //       <ManhajForm
// //         submitText="تعديل"
// //         mode="edit"
// //         defaultValues={defaultValues}
// //         onSubmit={handleEditManhaj}
// //       />
// //     </div>
// //   );
// // };

// // export default EditManhaj;





// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajForm from '../Components/ManhajForm';
// import axios from 'axios';
// import { BASE_URL } from '@/Constant/route';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// type Manhaj = {
//   name: string;
//   authorName: string;
//   targetAudionce: string;
//   numberOfLessons: number;
//   goals: string;
// };

// const EditManhaj = () => {
//   const { id } = useParams<{ id: string }>();
//   const manhajId = Number(id);

//   const [defaultValues, setDefaultValues] = useState<Manhaj | null>(null);

//   useEffect(() => {
//     const fetchManhaj = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/manhajs/${manhajId}`);
//         setDefaultValues({
//           name: res.data.name,
//           authorName: res.data.authorName,
//           targetAudionce: res.data.targetAudionce,
//           numberOfLessons: res.data.numberOfLessons,
//           goals: res.data.goals,
//         });
//       } catch (error) {
//         console.error(error);
//         alert('حدث خطأ أثناء جلب بيانات المنهج');
//       }
//     };

//     if (manhajId) fetchManhaj();
//   }, [manhajId]);

//   const handleEditManhaj = async (formData: FormData) => {
//     try {
//       await axios.put(`${BASE_URL}/manhajs/${manhajId}`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert('تم تعديل المنهج بنجاح ✅');
//     } catch (error) {
//       console.error(error);
//       alert('حدث خطأ أثناء التعديل ❌');
//     }
//   };

//   if (!defaultValues) return <div>جاري التحميل...</div>;

//   return (
//     <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white pb-5'>
//       <CustomFormTitle title='تعديل منهج' />

//       <ManhajForm
//         submitText="تعديل"
//         mode="edit"
//         defaultValues={defaultValues}
//         onSubmit={handleEditManhaj}
//       />
//     </div>
//   );
// };

// export default EditManhaj;