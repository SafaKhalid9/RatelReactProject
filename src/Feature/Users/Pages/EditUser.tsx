import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import UserForm from '../Components/UserForm';

const EditUser = () => {
  return (
    <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white'>
      <CustomFormTitle title='تعديل مستخدم' />
      <UserForm />
    </div>
  );
};

export default EditUser;
