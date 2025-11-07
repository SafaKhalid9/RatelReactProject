import AddNewUser from '@/Feature/Users/Pages/AddNewUser';
import AllUsers from '@/Feature/Users/Pages/AllUsers';
import ClientsPage from '@/Pages/ClientsPage';
import Dashboard from '@/Pages/Dashboard';
import {Route, Routes} from 'react-router';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ClientsPage />} />
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path='users' element={<AllUsers />} />
        <Route path='users/add-new-user' element={<AddNewUser />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
