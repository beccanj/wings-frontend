import { ArrowRight } from "lucide-react";

const Buttons = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  icon, iconPosition = "right",
  className, 
}) => {
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-black hover:bg-gray-300",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    outline2: "bg-[#F1F4F2] border border-borderColor text-bodyText hover:bg-primary hover:text-pageBg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex justify-center items-center gap-2 px-6 py-3 rounded-[8px] 
        
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