import CustomAddButtonAndSearch from '@/Components/Dashboard/CustomAddButtonAndSearch';
import CustomFormTitle from '@/Components/Dashboard/CustomFormTitle';
import AllUsersTable from '../Components/AllUsersTable';
import CustomPagination from '@/Components/SideBar/CustomPagination';
import GetAllUsers from '@/Services/GetAllUsers';
import {useNavigate} from 'react-router';
import type {IAllUsersTable} from '../Types/IAllUsersTable';

const AllUsers = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data: users, isLoading, isError, error} = GetAllUsers();
  console.log(users);
  const route = useNavigate();
  if (isLoading) return <p>loading</p>;
  if (isError) {
    console.error('====================================');
    console.error(error.message);
    console.log('====================================');
    route('/dashboard/error');
  }
  const listOfUsers: IAllUsersTable[] = [
    {
      userName: 'أحمد سالم',
      hasLicence: true,
      role: 'مدير',
      location: 'عدن',
      phoneNumber: 777111222
    },
    {
      userName: 'فاطمة باوزير',
      hasLicence: true,
      role: 'معلم',
      location: 'المكلا',
      phoneNumber: 735445678
    },
    {
      userName: 'عبدالرحمن الشنيني',
      hasLicence: false,
      role: 'طالب',
      location: 'صنعاء',
      phoneNumber: 713998877
    },
    {
      userName: 'خالد بامهدي',
      hasLicence: true,
      role: 'وكيل',
      location: 'سيئون',
      phoneNumber: 714224466
    },
    {
      userName: 'سارة بن مخاشن',
      hasLicence: false,
      role: 'طالب',
      location: 'تعز',
      phoneNumber: 770556677
    }
  ];
  return (
    <>
      <CustomFormTitle title='قائمة المستخدمين' />
      <CustomAddButtonAndSearch path='add-new-user' textButton='إضافة مستخدم جديد' />
      <AllUsersTable listOfUsers={listOfUsers} />
      <CustomPagination />
    </>
  );
};

export default AllUsers;
