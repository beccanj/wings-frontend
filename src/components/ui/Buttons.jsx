import { ArrowRight } from "lucide-react";

const Buttons = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  icon, iconPosition = "right",
  className = "",
  
}) => {
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 px-6 py-3",
    secondary: "bg-secondary text-black hover:bg-gray-300 px-6 py-3",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3",
    outline2: "bg-[#F1F4F2] border border-borderColor text-bodyText hover:bg-primary hover:text-pageBg px-6 py-3",
    pagination:"bg-[#E6F4F3] text-[#4B5563] hover:bg-[#D8EFED] px-4 py-2",
    borderless: "bg-[#EFEFEF] text-[#444651] hover:bg-[#D8EFED] font-medium px-4 py-2"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      
      className={`
        inline-flex justify-center items-center gap-2  rounded-[8px] 
        
        transition-all duration-300
        ${variants[variant]}
        ${className}
        
      `}
    >
       {iconPosition === "left" && icon}

      {text}

      {iconPosition === "right" && icon}
    </button>
  );
};

export default Buttons;