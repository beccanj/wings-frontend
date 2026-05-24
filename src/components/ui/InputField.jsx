export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-bodyText text-sm">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
        mb-3
        text-sm
        bg-inputBg
          w-full
          border border-borderColor
          rounded-lg
          px-4
          py-2
          outline-none
          focus:ring-2
          focus:ring-primary
        "
      />
    </div>
  );
}