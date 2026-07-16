import React from "react";
import { TriangleAlert } from 'lucide-react'

export default function PhoneInputField({
    label,
    countryCode,
    phone,
    onCountryCodeChange,
    onPhoneChange,
    countryCodes = [
        { code: "+254", country: "Kenya" },
        { code: "+255", country: "Tanzania" },
        { code: "+256", country: "Uganda" },
    ],
    error,
}) {

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-bodyText">
                {label}
            </label>

            <div
                className={`
        flex
        overflow-hidden
        rounded-[8px]
        border
        bg-inputBg
        transition-all
        duration-200

        ${error
                        ? "border-red-500 focus-within:ring-2 focus-within:ring-red-200 focus-within:border-red-500"
                        : "border-borderColor focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 mb-3"
                    }
    `}
            >
                {/* Country Code */}
                <select

                    name="countryCode"
                    value={countryCode}
                    onChange={onCountryCodeChange}
                    className="
            
            border-r
            border-borderColor
            bg-[#E5E9E7]
            px-4
            py-3
            text-sm
            appearance-none
            outline-none
            focus:outline-none
            cursor-pointer

            
          "
                >
                    {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.code}
                        </option>
                    ))}
                </select>

                {/* Phone Number */}
                <input
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={onPhoneChange}
                    placeholder="712 345 678"
                    className="
            flex-1
            
            bg-transparent
            px-4
            text-sm
            outline-none
            focus:outline-none
            
          "
                />

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