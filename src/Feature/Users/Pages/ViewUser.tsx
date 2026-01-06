import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import UserForm from '../Components/UserForm';

const ViewUser = () => {
  return (
    <div className='border-t-15 border-[#CB997E] rounded-2xl bg-white'>
      <CustomFormTitle title='إضافة مستخدم جديد' />
      <UserForm />
    </div>
  );
};

export default ViewUser;
