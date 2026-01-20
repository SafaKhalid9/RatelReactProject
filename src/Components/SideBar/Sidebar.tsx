import {
  ActivitiesImage,
  BarChardImage,
  KoranImage,
  LogoImage,
  PathImage,
  StudentsImage,
  ThreeBookImage,
  UsersImage,
  home,
  logoutIcon,
} from "@/assets";

import SidebarItem from "./SidebarItem";
import type { ISideBarItem } from "@/Types/ISideBarItem";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Contexts/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const topMenu: ISideBarItem[] = [
    { text: "الأحصائيات", icon: BarChardImage, path: "/dashboard" },
    { text: "إدارة الحلقات", icon: KoranImage, path: "/dashboard/halaqas" },
    { text: "إدارة المستخدمين", icon: UsersImage, path: "/dashboard/users" },
    {
      text: "إدارة الطالبات",
      icon: StudentsImage,
      path: "/dashboard/students",
    },
    {
      text: "إدارة المسارات",
      icon: PathImage,
      path: "/dashboard/memorization-paths",
    },
    { text: "إدارة المناهج", icon: ThreeBookImage, path: "/dashboard/manhajs" },
    {
      text: "إدارة الاختبارات",
      icon: ActivitiesImage,
      path: "/dashboard/exams",
    },
  ];

  const bottomMenu: ISideBarItem[] = [
    {
      text: "الصفحة الرئيسية",
      icon: home,
      path: "/home",
    },
    {
      text: "تسجيل الخروج",
      icon: logoutIcon,
      path: "/logout",
      onClick: () => {
        logout();
        navigate("/", { replace: true });
      },
    },
  ];

  return (
    <aside className="min-w-60 flex flex-col items-center bg-white h-screen rounded-tr-[20px] rounded-br-[20px] py-2 px-4">
      <img className="w-28 mx-auto mb-8" src={LogoImage} alt="logo" />

      <div className="flex flex-col gap-y-2 w-full">
        {topMenu.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>

      <div className="flex-1" />

      <div className="flex flex-col gap-y-2 w-full">
        {bottomMenu.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
