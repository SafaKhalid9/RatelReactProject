import DashboardError from '@/Components/DashboardError';
import AddNewUser from '@/Feature/Users/Pages/AddNewUser';
import AllUsers from '@/Feature/Users/Pages/AllUsers';
import EditUser from '@/Feature/Users/Pages/EditUser';
import ViewUser from '@/Feature/Users/Pages/ViewUser';

import AddNewManhaj from '@/Feature/Mnahj/Pages/AddNewManhaj';
import EditManhaj from '@/Feature/Mnahj/Pages/EditManhaj';

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
        <Route path='users/view/:id' element={<ViewUser />} />
        <Route path='users/edit/:id' element={<EditUser />} />

        <Route path='manhajs/add-new-manhaj' element={<AddNewManhaj />} />
        <Route path='manhajs/edit/:id' element={<EditManhaj />} />
        <Route path='error' element={<DashboardError />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
