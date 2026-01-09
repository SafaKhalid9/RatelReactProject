import DashboardError from '@/Components/DashboardError';
import AddNewUser from '@/Feature/Users/Pages/AddNewUser';
import AllUsers from '@/Feature/Users/Pages/AllUsers';
import EditUser from '@/Feature/Users/Pages/EditUser';
import ViewUser from '@/Feature/Users/Pages/ViewUser';

import AddNewManhaj from '@/Feature/Mnahj/Pages/AddNewManhaj';
import EditManhaj from '@/Feature/Mnahj/Pages/EditManhaj';

import HalaqasList from '@/Feature/Halaqas/Pages/HalaqasList';
import AddHalaqa from '@/Feature/Halaqas/Pages/AddHalaqa';
import ViewHalaqa from '@/Feature/Halaqas/Pages/ViewHalaqa';
import EditHalaqa from '@/Feature/Halaqas/Pages/EditHalaqa';

import AllMemorizationPaths from '@/Feature/MemorizationPaths/Pages/AllMemorizationPaths';
import AddNewMemorizationPath from '@/Feature/MemorizationPaths/Pages/AddNewMemorizationPath';
import EditMemorizationPath from '@/Feature/MemorizationPaths/Pages/EditMemorizationPath';
import ViewMemorizationPath from '@/Feature/MemorizationPaths/Pages/ViewMemorizationPath';

import ClientsPage from '@/Pages/ClientsPage';
import Dashboard from '@/Pages/Dashboard';
import {Route, Routes} from 'react-router-dom';

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

        {/* Halaqas Routes */}
        <Route path='halaqas' element={<HalaqasList />} />
        <Route path='halaqas/add' element={<AddHalaqa />} />
        <Route path='halaqas/view/:id' element={<ViewHalaqa />} />
        <Route path='halaqas/edit/:id' element={<EditHalaqa />} />

        {/* Memorization Paths Routes */}
        <Route path='memorization-paths' element={<AllMemorizationPaths />} />
        <Route path='memorization-paths/add' element={<AddNewMemorizationPath />} />
        <Route path='memorization-paths/edit/:id' element={<EditMemorizationPath />} />
        <Route path='memorization-paths/view/:id' element={<ViewMemorizationPath />} />

        <Route path='error' element={<DashboardError />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
