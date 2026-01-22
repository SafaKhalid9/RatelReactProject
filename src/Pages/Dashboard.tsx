import Sidebar from '@/Components/SideBar/Sidebar';
import {Outlet} from 'react-router-dom';

const Dashboard = () => {
  return (
    <main className='bg-primary py-4 px-5 flex '>
      <Sidebar />
      <section className='px-5 w-full'>
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
