import { NavLink } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        console.log(label, path, isActive);

        return `
          flex items-center gap-3 rounded-l-[90px] px-4 py-3 text-sm font-medium transition-all duration-200 
          ${
            isActive
              ? "bg-white text-[#0B6655] shadow-sm "
             : "text-[#475569] hover:bg-[#F7F9FB] hover:text-[#0B6655] "
          }
        `;
      }}
    >
      <Icon size={20} strokeWidth={2} />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;