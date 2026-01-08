// import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
// import ManhajForm from '../Components/ManhajForm';
// import {BASE_URL} from '@/Constant/route';


// const AddNewManhaj = () => {
//   console.log(BASE_URL);

//   return (
//     <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white pb-5'>
//       <CustomFormTitle title='إضافة منهج جديد' />
//       <ManhajForm />
//       <div className='flex justify-center'>
//         <CustomButton>إضافة</CustomButton>
//       </div>
//     </div>
//   );
// };


import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import ManhajForm from '../Components/ManhajForm';
import axios from 'axios';
import {BASE_URL} from '@/Constant/route';

const AddNewManhaj = () => {

  const handleAddManhaj = async (formData: FormData) => {
    try {
      await axios.post(
        `${BASE_URL}/manhajs`, // تأكدي نفس endpoint في Swagger
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      alert('تمت إضافة المنهج بنجاح ✅');
    } catch (error) {
      console.error(error);
      alert('حدث خطأ أثناء الإضافة ❌');
    }
  };

  return (
    <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white '>
      <CustomFormTitle title='إضافة منهج جديد' />

      <ManhajForm
        submitText="إضافة"
        mode="add"
        onSubmit={handleAddManhaj}
      />
    </div>
  );
};

export default AddNewManhaj;
