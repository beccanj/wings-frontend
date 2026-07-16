import { TriangleAlert } from 'lucide-react'


export default function InputField({
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-bodyText text-sm">
        {label}
      </label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
  
  text-sm
  bg-inputBg
  w-full
  border
  rounded-[8px]
  px-4
  py-3
  transition-colors duration-200
  focus:outline-none

  ${error
            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
            : "border-borderColor  focus:border-primary focus:ring-primary/20 mb-3"
          }
`}
      />
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