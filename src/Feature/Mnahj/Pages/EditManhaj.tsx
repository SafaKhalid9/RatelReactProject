// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajForm from '../Components/ManhajForm';
// import CustomButton from '@/Components/CustomButton';


// const EditManhaj = () => {
//   return (
//     <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white pb-5'>
//       <CustomFormTitle title='تعديل منهج' />
//       <ManhajForm />
//       <div className='flex justify-center'>
//         <CustomButton>تعديل</CustomButton>
//       </div>
//     </div>
//   );
// };

// export default EditManhaj;



// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajForm from '../Components/ManhajForm';
// import axios from 'axios';
// import {BASE_URL} from '@/Constant/route';
// import {useEffect, useState} from 'react';

// type ManhajData = {
//   name: string;
//   authorName: string;
//   targetAudionce: string;
//   numberOfLessons: number;
//   goals: string;
// };

// const EditManhaj = ({ manhajId }: { manhajId: number }) => {
//   const [defaultValues, setDefaultValues] = useState<ManhajData | null>(null);

//   // جلب بيانات المنهج عند تحميل الصفحة
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
//         alert('فشل جلب بيانات المنهج');
//       }
//     };

//     fetchManhaj();
//   }, [manhajId]);

//   const handleEditManhaj = async (formData: FormData) => {
//     try {
//       await axios.put(`${BASE_URL}/manhajs/${manhajId}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('تم تعديل المنهج بنجاح ✅');
//     } catch (error) {
//       console.error(error);
//       alert('حدث خطأ أثناء التعديل ❌');
//     }
//   };

//   if (!defaultValues) return <div>جارٍ تحميل بيانات المنهج...</div>;

//   return (
//     <div className="border-t-15 border-[#CB997E] rounded-2xl bg-white pb-5">
//       <CustomFormTitle title="تعديل منهج" />
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





// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajForm from '../Components/ManhajForm';
// import axios from 'axios';
// import { BASE_URL } from '@/Constant/route';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const EditManhaj = () => {
//   const { id } = useParams<{ id: string }>();
//   const manhajId = Number(id);

//   const [defaultValues, setDefaultValues] = useState<any>(null);

//   // جلب بيانات المنهج عند تحميل الصفحة
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





import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import ManhajForm from '../Components/ManhajForm';
import axios from 'axios';
import { BASE_URL } from '@/Constant/route';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

type Manhaj = {
  name: string;
  authorName: string;
  targetAudionce: string;
  numberOfLessons: number;
  goals: string;
};

const EditManhaj = () => {
  const { id } = useParams<{ id: string }>();
  const manhajId = Number(id);

  const [defaultValues, setDefaultValues] = useState<Manhaj | null>(null);

  useEffect(() => {
    const fetchManhaj = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/manhajs/${manhajId}`);
        setDefaultValues({
          name: res.data.name,
          authorName: res.data.authorName,
          targetAudionce: res.data.targetAudionce,
          numberOfLessons: res.data.numberOfLessons,
          goals: res.data.goals,
        });
      } catch (error) {
        console.error(error);
        alert('حدث خطأ أثناء جلب بيانات المنهج');
      }
    };

    if (manhajId) fetchManhaj();
  }, [manhajId]);

  const handleEditManhaj = async (formData: FormData) => {
    try {
      await axios.put(`${BASE_URL}/manhajs/${manhajId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('تم تعديل المنهج بنجاح ✅');
    } catch (error) {
      console.error(error);
      alert('حدث خطأ أثناء التعديل ❌');
    }
  };

  if (!defaultValues) return <div>جاري التحميل...</div>;

  return (
    <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white pb-5'>
      <CustomFormTitle title='تعديل منهج' />

      <ManhajForm
        submitText="تعديل"
        mode="edit"
        defaultValues={defaultValues}
        onSubmit={handleEditManhaj}
      />
    </div>
  );
};

export default EditManhaj;
