import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { TriangleAlert } from 'lucide-react'


export default function PasswordInput({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,

}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-y-2">
      <label className="font-medium text-bodyText text-sm">
        {label}
      </label>

      <div className="relative">
        <input
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
    bg-inputBg
    text-sm
    w-full
    border
    rounded-[8px]
    px-4
    py-3
    pr-12
    transition-colors duration-200
    focus:outline-none
    ${error
              ? "border-red-500 focus-within:ring-2 focus-within:ring-red-200 focus-within:border-red-500"
              : "border-borderColor focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
            }
  `}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-3
            top-5.75
            -translate-y-1/2
            
            
          "
        >
          {show ? <EyeOff size={18} color="#94A3B8" /> : <Eye size={18} color="#94A3B8" />}
        </button>
      </div>
      {error && (
        <div className="flex gap-1 items-center">
          <TriangleAlert color='red' size={12} />
          <p className="text-red-500 text-xs ">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}