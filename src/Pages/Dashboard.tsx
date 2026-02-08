import Footer from "@/Components/ClientsPage/Footer";
import Sidebar from "@/Components/SideBar/Sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <>
      <main className="bg-primary py-4 px-5 flex ">
        <Sidebar />
        <section className="px-5 w-full">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
