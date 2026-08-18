import { ChevronDown } from "lucide-react";

const SelectField = ({
    name,
    label,
    value,
    onChange,
    options = [],
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-bold text-subBody text-xs uppercase tracking-[0.6px]">
                {label}
            </label>

            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="
                        appearance-none
                        text-sm
                        bg-inputBg
                        w-full
                        border
                        border-borderColor
                        rounded-[8px]
                        px-4
                        py-3
                        pr-10
                        transition-colors
                        duration-200
                        focus:outline-none
                        focus:border-primary
                        focus:ring-2
                        focus:ring-primary/20
                    "
                >
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={16}
                    className="
                        pointer-events-none
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-[#697476]
                    "
                />
            </div>
        </div>
    );
};

export default SelectField;