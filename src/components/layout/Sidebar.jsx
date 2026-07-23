import SidebarLogo from "../ui/SidebarLogo";
import SidebarItem from "../ui/SidebarItem";

import {
  LayoutDashboard,
  Users,
  BadgeCheck,
  Building2,
  BriefcaseBusiness,
  MessageSquare,
  FileText,
  BarChart3,
  ClipboardList,
  Flag,
  CircleHelp,
  LogOut,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen, logoTitle, logoSubtitle, sections = [], footer, }) => {
  return (
    <>
      {/* Mobile backdrop  */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          h-screen w-72 shrink-0 bg-secondary 
          flex flex-col
          transform transition-transform duration-300 ease-in-out shadow-sm
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:sticky lg:top-0 lg:z-30
        `}
      >
        <div className="shrink-0">
          <SidebarLogo title={logoTitle} subTitle={logoSubtitle} />
        </div>

        
        <nav className="flex-1 min-h-0 overflow-y-auto pl-6 space-y-2 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section, index) => (
            <div key={section.label ?? index} className={index > 0 ? "pt-4" : ""}>
              {section.label && (
                <p className="pb-2 pl-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.label}
                </p>
              )}

              <div className="space-y-2">
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.path}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>

        {footer && (
          <div className="shrink-0 border-t border-gray-200 pl-6 pr-4 py-4 space-y-3">
            <SidebarItem icon={footer.icon} label={footer.label} path={footer.path} />
            {footer.version && (
              <p className="pl-1 text-xs text-gray-400">{footer.version}</p>
            )}
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;