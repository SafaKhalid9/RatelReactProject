import Footer from "@/Components/ClientsPage/Footer";
import Sidebar from "@/Components/SideBar/Sidebar";
import { Outlet } from "react-router";
const Dashboard = () => {
  return (
    <>
      <div className="h-screen flex bg-primary">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto px-5 py-4">
            <Outlet />
          </main>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
