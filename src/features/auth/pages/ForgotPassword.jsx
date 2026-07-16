import React, { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import InputField from '../../../components/ui/InputField'
import PasswordInput from '../../../components/ui/PasswordInput'
import Buttons from '../../../components/ui/Buttons'
import arrowRight from '../../../assets/buttons/Icon.svg'
import { Link } from "react-router-dom"
import { TriangleAlert } from 'lucide-react'
import useFormValidation from '../../../hooks/useFormValidation'
import PhoneInputField from '../../../components/ui/PhoneInputField'
import sendMessage from '../../../assets/buttons/Container.svg'


const ForgotPassword = () => {

    // ----form rules -----
    const validateForgotPassword = (values) => {
        const errors = {};

        if (!values.phone.trim()) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{10,15}$/.test(values.phone.replace(/\s/g, ""))) {
            errors.phone = "Enter a valid phone number";
        }

        return errors;
    };

    // -----reusing useFormValidation hook----
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useFormValidation(
        {
            countryCode: "+254",
            phone: "",
        },
        validateForgotPassword,
        (values, resetForm) => {
             alert("Michael Jackson says heehee 👀✅");

            // API call here
             resetForm();
        }
    );




    return (



        <AuthLayout
            title="Forgot Password?"
            subTitle="Enter your phone number to receive a reset link"
            footerText="Remember your password?"
            footerLinkText="Sign In"
            footerLink="/login"
            showSocial={false}

        >

            <form className=' w-full' onSubmit={handleSubmit}>
                <PhoneInputField
                    name="phone"
                    label="Phone Number"
                    countryCode={values.countryCode}
                    phone={values.phone}
                    onCountryCodeChange={handleChange}
                    onPhoneChange={handleChange}
                    error={errors.phone}
                />


                <div className="flex justify-center w-full items-center mt-4">
                    <Buttons
                        type='submit'
                        className="mb-5 text-sm font-bold w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                        text="Send Reset Link"
                        icon={<img src={sendMessage} className="w-4 h-4" />}
                    />
                </div>


            </form>




        </AuthLayout>
    )
}

export default ForgotPassword
