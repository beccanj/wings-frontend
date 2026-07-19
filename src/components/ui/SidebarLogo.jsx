const SidebarLogo = ({title, subTitle}) => {
  return (
    <div className="px-6 pt-6 pb-10  ">
      <h1 className="text-3xl font-extrabold tracking-tight text-[#064E3B] font-manrope">
        {title}
      </h1>

      <p className="mt-1 text-sm uppercase tracking-[1.2px] text-[#64748B] font-medium">
        {subTitle}
      </p>
    </div>
  );
};

export default SidebarLogo;