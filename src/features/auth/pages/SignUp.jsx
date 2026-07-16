import React from 'react'
import AuthLayout from '../components/AuthLayout'
import InputField from '../../../components/ui/InputField'
import PasswordInput from '../../../components/ui/PasswordInput'
import Buttons from '../../../components/ui/Buttons'
import arrowRight from '../../../assets/buttons/Icon.svg'
import { Link } from "react-router-dom"
import useFormValidation from '../../../hooks/useFormValidation'
import PhoneInputField from '../../../components/ui/PhoneInputField'
import Checkbox from '../../../components/ui/Checkbox'

const SignUp = () => { // ----form rules----
    const validateSignup = (values) => {
        const errors = {};

        if (!values.fullName.trim()) {
            errors.fullName = "Full name is required";
        }

        if (
            values.email.trim() &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
        ) {
            errors.email = "Enter a valid email address";
        }

        if (!values.phone.trim()) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{10,15}$/.test(values.phone.replace(/\s/g, ""))) {
            errors.phone = "Enter a valid phone number";
        }

        if (!values.password.trim()) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }

        if (!values.confirmPassword.trim()) {
            errors.confirmPassword = "Please confirm your password";
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    // ----reusing the hook for vaidation------
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useFormValidation(
        {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            countryCode: "+254",
            phone: "",
        },
        validateSignup,
        (values, resetForm) => {
            alert("Michael Jackson says heehee 👀✅");
            console.log(values);

            // API call here
              resetForm();
        }
    );


    return (

        <AuthLayout
            title="Create Account"
            subTitle="Join as a Worker"
            footerText="Already have an account?"
            footerLinkText="Sign In"
            footerLink="/login"


        >
            <form className=' w-full' onSubmit={handleSubmit}>
                <InputField
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    label="Full Name"
                    placeholder="Enter your full name"
                    error={errors.fullName}
                />

                <PhoneInputField
                    name="phone"
                    label="Phone Number"
                    countryCode={values.countryCode}
                    phone={values.phone}
                    onCountryCodeChange={handleChange}
                    onPhoneChange={handleChange}
                    error={errors.phone}
                />

                <InputField
                    name="email"
                    label="Email (optional)"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="example@wings.com"
                />

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:mb-3">
                    <PasswordInput
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password}
                        label="Password"
                        placeholder="Enter password"
                    />

                    <PasswordInput
                        label="Confirm Password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                        placeholder="Confirm password"
                    />
                </div>

                <Checkbox
                    className="my-3"
                    label={
                        <span className="block text-sm leading-4 text-bodyText mt-3 md:m-0">
                            I agree to the{" "}
                            <Link
                                to="/terms"
                                className="font-semibold text-primary hover:underline"
                            >
                                Terms and Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy"
                                className="font-semibold text-primary hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </span>
                    }
                />



                <div className="flex justify-center w-full items-center mt-4">
                    <Buttons
                        type="submit"
                        className="mb-5 text-sm font-bold w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                        text="Sign Up"
                        icon={<img src={arrowRight} className="w-4 h-4" />}
                    />
                </div>


            </form>




        </AuthLayout>
    )
}

export default SignUp
