// import {
//   ActivitiesImage,
//   BarChardImage,
//   KoranImage,
//   LogoImage,
//   PathImage,
//   StudentsImage,
//   ThreeBookImage,
//   UsersImage,
//   home,
//   logoutIcon,
// } from "@/assets";

// import SidebarItem from "./SidebarItem";
// import type { ISideBarItem, TSettingItem } from "@/Types/ISideBarItem";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "@/Contexts/AuthContext";
// import { User2 } from "lucide-react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../ShadCn/accordion";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const topMenu: ISideBarItem[] = [
//     {
//       text: "تحضير المعلمين",
//       icon: UsersImage,
//       path: "/dashboard/teacher-attendance",
//     },
//     { text: "الأحصائيات", icon: BarChardImage, path: "/dashboard/statistics" },
//     { text: "إدارة الحلقات", icon: KoranImage, path: "/dashboard/halaqas" },
//     { text: "إدارة المستخدمين", icon: UsersImage, path: "/dashboard/users" },
//     {
//       text: "إدارة الطلاب",
//       icon: StudentsImage,
//       path: "/dashboard/students",
//     },
//     {
//       text: "إدارة المسارات",
//       icon: PathImage,
//       path: "/dashboard/memorization-paths",
//     },
//     { text: "إدارة المناهج", icon: ThreeBookImage, path: "/dashboard/manhajs" },
//     {
//       text: "إدارة الاختبارات",
//       icon: ActivitiesImage,
//       path: "/dashboard/exams",
//     },
//   ];
//   const setting: TSettingItem[] = [
//     {
//       text: "درجات التقدير",
//       icon: User2,
//       path: "/dashboard/appreciation-grades",
//     },
//   ];
//   const bottomMenu: ISideBarItem[] = [
//     {
//       text: "الصفحة الرئيسية",
//       icon: home,
//       path: "/home",
//     },
//     {
//       text: "تسجيل الخروج",
//       icon: logoutIcon,
//       path: "/",
//       onClick: () => {
//         logout();
//         navigate("/", { replace: true });
//       },
//     },
//   ];

//   return (
//     <aside className="min-w-60 flex flex-col items-center bg-white h-screen rounded-tr-[20px] rounded-br-[20px] py-2 px-4">
//       <img className="w-25 mx-auto mb-8 mt-4" src={LogoImage} alt="logo" />

//       <div className="flex-1 overflow-y-auto flex flex-col gap-y-2 w-full">
//         {topMenu.map((item, index) => (
//           <SidebarItem key={index} item={item} />
//         ))}

//         <Accordion type="single" collapsible>
//           <AccordionItem value="settings" className="border-none">
//             <AccordionTrigger className="py-3">الاعدادات</AccordionTrigger>

//             <AccordionContent className="pt-2 pb-2 space-y-2">
//               {setting.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   className="flex items-center gap-x-2 pr-6"
//                 >
//                   <item.icon size={18} />
//                   <p>{item.text}</p>
//                 </Link>
//               ))}
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>

//       <div className="flex flex-col gap-y-2 w-full shrink-0 pt-2">
//         {bottomMenu.map((item, index) => (
//           <SidebarItem key={index} item={item} />
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;






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
// import { User2 } from "lucide-react";


const Sidebar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const topMenu: ISideBarItem[] = [
    { text: "تحضير المعلمين", icon: UsersImage, path: "/dashboard/teacher-attendance" },
    { text: "الأحصائيات", icon: BarChardImage, path: "/dashboard/statistics" },
    { text: "إدارة الحلقات", icon: KoranImage, path: "/dashboard/halaqas" },
    { text: "إدارة المستخدمين", icon: UsersImage, path: "/dashboard/users" },
    { text: "إدارة الطلاب", icon: StudentsImage, path: "/dashboard/students" },
    { text: "إدارة المسارات", icon: PathImage, path: "/dashboard/memorization-paths" },
    { text: "إدارة المناهج", icon: ThreeBookImage, path: "/dashboard/manhajs" },
    { text: "إدارة الاختبارات", icon: ActivitiesImage, path: "/dashboard/exams" },
    { text: "درجات التقدير", icon: ActivitiesImage, path: "/dashboard/appreciation-grades" },
  ];

  const bottomMenu: ISideBarItem[] = [
    { text: "الصفحة الرئيسية", icon: home, path: "/home" },
    {
      text: "تسجيل الخروج",
      icon: logoutIcon,
      path: "/",
      onClick: () => {
        logout();
        navigate("/", { replace: true });
      },
    },
  ];

  return (
    <aside className="min-w-64 flex flex-col items-center bg-white h-screen rounded-tr-[20px] rounded-br-[20px] py-2 px-3 shadow-sm overflow-hidden">
      
      <img className="w-14 mx-auto mb-2 mt-1 shrink-0" src={LogoImage} alt="logo" />

      <div className="flex-1 flex flex-col w-full no-scrollbar overflow-y-auto">
        {topMenu.map((item, index) => (
          <div key={index} className="mb-0.5">
            <SidebarItem item={item} />
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full shrink-0 pt-2 border-t border-gray-100 mt-auto">
        {bottomMenu.map((item, index) => (
          <div key={index} className="mb-0.5">
            <SidebarItem item={item} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;