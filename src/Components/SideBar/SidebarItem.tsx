import type { ISideBarItem } from "@/Types/ISideBarItem";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }: { item: ISideBarItem }) => {
  const { text, icon, path, onClick } = item;

  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `
    cursor-pointer w-full rounded-lg flex gap-x-2 items-center ps-3 py-3
    border-b transition-colors duration-300
    ${isActive ? "bg-(--light-green) text-white" : "hover:bg-(--light-green)"}
    `
      }
    >
      <img className="w-6" src={icon} alt="icon" />
      <span className="text-base font-semibold">{text}</span>
    </NavLink>
  );
};

export default SidebarItem;
