import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  label,
  placeholder,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-bodyText text-sm">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="
          bg-inputBg
          text-sm
            w-full
            border
            border-borderColor
            rounded-xl
            px-4
            py-2
            pr-12
            transition-colors duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
            
          "
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            
            
          "
        >
          {show ? <EyeOff size={18} color="#94A3B8" /> : <Eye size={18} color="#94A3B8" />}
        </button>
      </div>
    </div>
  );
}