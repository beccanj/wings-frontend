const Checkbox = ({ label, id, ...props }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="checkbox"
        className="w-3 h-3 text-borderColor bg-secondary border-borderColor rounded focus:ring-primary focus:ring-1 cursor-pointer"
        {...props}
      />
      <label 
        htmlFor={id} 
        className="ms-2 text-sm  text-subBody cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

