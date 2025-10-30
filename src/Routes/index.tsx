import ClientsPage from '@/Pages/ClientsPage';
import Dashboard from '@/Pages/Dashboard';
import {Route, Routes} from 'react-router';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ClientsPage />} />
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  );
};

export default AllRoutes;
