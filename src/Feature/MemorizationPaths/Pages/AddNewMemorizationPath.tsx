// import { useNavigate } from 'react-router-dom';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import MemorizationPathForm from '../Components/MemorizationPathForm';
// import { useAddMemorizationPath } from '../Services/memorizationPath.service';
// import type { MemorizationPathFormData } from '../Types/memorizationPath.types';

// const AddNewMemorizationPath = () => {
//   const navigate = useNavigate();
//   const { mutateAsync: addPath, isPending } = useAddMemorizationPath();

//   const handleSubmit = async (data: MemorizationPathFormData) => {
//     try {
//         await addPath(data);
//         navigate('/dashboard/memorization-paths');
//     } catch (error) {
//         console.error("Failed to add path", error);
//         // Could add toast notification here
//     }
//   };

//   return (
//     <div className='flex flex-col gap-5 p-5 bg-background h-full'>
//       <CustomFormTitle text='إضافة مسار جديد' />
//       <div className="bg-white p-5 rounded-lg shadow-sm">
//         <MemorizationPathForm 
//             mode="add" 
//             onSubmit={handleSubmit} 
//             isLoading={isPending}
//         />
//       </div>
//     </div>
//   );
// };

// export default AddNewMemorizationPath;
//=============================================================

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import MemorizationPathForm from '../Components/MemorizationPathForm';
// import type { MemorizationPathFormData } from '../Types/memorizationPath.types';
// import { BASE_URL } from '@/Constant/route';

// // ✨ ضعي التوكن اللي حصلتيه من Swagger هنا
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJzdWIiOiJhZG1pbiIsImp0aSI6IjY0YjEyMGQ3LWU3ZDItNDkyNi05NmY5LTE2ODI5OWI4Zjc3YiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoi2KPYr9in2LHZiiIsImV4cCI6MTc2ODc1MjI5MCwiaXNzIjoiUmF0ZUFQSSIsImF1ZCI6IlJhdGVsQ2xpZW50In0.UhCkAvhD-UDEZTk05obziXWxS8XAUTF0frI2WF2XyEE';

// const AddNewMemorizationPath = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (data: MemorizationPathFormData) => {
//     try {
//       setIsLoading(true);

//       // إرسال البيانات للـ API
//       const res = await axios.post(`${BASE_URL}/memorization-paths`, data, {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       alert('تمت إضافة المسار بنجاح ✅');
//       console.log('Response:', res.data);

//       // الانتقال للـ dashboard بعد الإضافة
//       navigate('/dashboard/memorization-paths');

//     } catch (error: unknown) {
//       console.error(error);
//       if (axios.isAxiosError(error)) {
//         const msg = error.response?.data?.message || error.message;
//         alert(`حدث خطأ أثناء الإضافة ❌\n${msg}`);
//       } else if (error instanceof Error) {
//         alert(`حدث خطأ غير معروف ❌\n${error.message}`);
//       } else {
//         alert('حدث خطأ غير معروف أثناء الإضافة ❌');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white '>
//       <CustomFormTitle title='إضافة مسار جديد' />
//         <MemorizationPathForm
//           mode="add"
//           onSubmit={handleSubmit}
//           isLoading={isLoading}
//         />
//       </div>
//   );
// };

// export default AddNewMemorizationPath;




//===================
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import MemorizationPathForm from '../Components/MemorizationPathForm';
// import type { MemorizationPathFormData } from '../Types/memorizationPath.types';
// import api from '@/Services/api';

// const AddNewMemorizationPath = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (data: MemorizationPathFormData) => {
//     try {
//       setIsLoading(true);

//       // ✅ الطلب بدون توكن (interceptor يتكفل فيه)
//       await api.post('/memorization-paths', data);

//       alert('تمت إضافة المسار بنجاح ✅');
//       navigate('/dashboard/memorization-paths');

//     } catch (error) {
//       console.error(error);
//       alert('حدث خطأ أثناء الإضافة ❌');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="border-t-15 border-[#CB997E] rounded-2xl bg-white">
//       <CustomFormTitle title="إضافة مسار جديد" />
//       <MemorizationPathForm
//         mode="add"
//         onSubmit={handleSubmit}
//         isLoading={isLoading}
//       />
//     </div>
//   );
// };

// export default AddNewMemorizationPath;
