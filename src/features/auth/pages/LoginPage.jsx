import React from 'react'
import AuthLayout from '../components/AuthLayout'
import InputField from '../../../components/ui/InputField'
import PasswordInput from '../../../components/ui/PasswordInput'
import Buttons from '../../../components/ui/Buttons'
import arrowRight from '../../../assets/buttons/Icon.svg'
import { Link, useNavigate } from "react-router-dom"
import useFormValidation from '../../../hooks/useFormValidation'
import { useAuth } from '../components/Authcontext'
import { useRole } from '../components/Rolecontext'

const Login = () => {

    const navigate = useNavigate();
    const { setRole } = useRole();

    const validateLogin = (values) => {
        const errors = {};

        if (!values.fullName.trim()) {
            errors.fullName = "Full name is required";
        }


        if (!values.password.trim()) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }

        return errors;
    };

    const {
        values,
        errors,
        loading,
        handleChange,
        handleSubmit,
    } = useFormValidation(
        {
            fullName: "",
            password: "",

        },
        validateLogin,
        (values, resetForm) => {

            return new Promise((resolve) => {
                setRole(values.role);
                resetForm();
                resolve();
                navigate("/dash");
            });

        }
    );
    return (

        <AuthLayout
            title="Welcome Back"
            subTitle="Sign in to continue"
            footerText="Don't have an account?"
            footerLinkText="Sign up"
            footerLink="/signup"


        >
            <form className=' w-full' onSubmit={handleSubmit}>
                {/* toggle to admin/employer for now */}
                <div className="relative h-0">
                    <div className="absolute top-0 right-0 flex gap-1">
                        <button
                            type="button"
                            onClick={() => handleChange({ target: { name: "role", value: "admin" } })}
                            className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-semibold transition-colors ${values.role === "admin"
                                    ? "bg-primary text-white"
                                    : "text-bodyText/30 hover:text-bodyText/60"
                                }`}
                        >
                            A
                        </button>

                        <button
                            type="button"
                            onClick={() => handleChange({ target: { name: "role", value: "employer" } })}
                            className={`w-5 h-5 flex items-center justify-center rounded text-[10px] font-semibold transition-colors ${values.role === "employer"
                                    ? "bg-primary text-white"
                                    : "text-bodyText/30 hover:text-bodyText/60"
                                }`}
                        >
                            E
                        </button>
                    </div>
                </div>


                <InputField
                    label="Full Name"
                    name='fullName'
                    value={values.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    error={errors.fullName}
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    error={errors.password}
                />

                <p className='text-primary font-semibold text-right mt-3 text-xs cursor-pointer hover:text-primary/40'><Link to='/forgotpassword'>Forgot Password?</Link></p>


                <div className="flex justify-center w-full items-center mt-4">
                    <Buttons
                        type='submit'
                        disabled={loading}
                        className="mb-5 text-sm font-bold w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                        text={loading ? "Logging In..." : "Log In"}
                        icon={<img src={arrowRight} className="w-4 h-4" />}
                    />
                </div>


            </form>




        </AuthLayout>
    )
}

export default Login
