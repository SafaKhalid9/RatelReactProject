import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import AllUsersTable from '../Components/AllUsersTable';
import CustomPagination from '@/Components/SideBar/CustomPagination';

const AllUsers = () => {
  return (
    <>
      <CustomFormTitle title='قائمة المستخدمين' />
      <CustomAddButtonAndSearch path='add-new-user' textButton='إضافة مستخدم جديد' />
      <AllUsersTable />
      <CustomPagination />
    </>
  );
};

export default AllUsers;
