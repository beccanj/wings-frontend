import React from 'react'
import AuthLayout from '../components/AuthLayout'
import InputField from '../../../components/ui/InputField'
import PasswordInput from '../../../components/ui/PasswordInput'
import Buttons from '../../../components/ui/Buttons'
import arrowRight from '../../../assets/buttons/Icon.svg'
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (

        <AuthLayout
            title="Welcome Back"
            subTitle="Sign in to continue"
            footerText="Don't have an account?"
            footerLinkText="Sign up"
            footerLink="/signup"


        >
            <form className=' w-full' action="">
                <InputField
                    label="Full Name"
                    placeholder="Enter your full name"
                />

                <PasswordInput
                    label="Password"
                    placeholder="Enter password"
                />

                <p className='text-primary font-semibold text-right mt-3 text-xs cursor-pointer hover:text-primary/40'><Link to='/forgotpassword'>Forgot Password?</Link></p>


                <div className="flex justify-center w-full items-center mt-4">
                    <Buttons
                        className="mb-5 text-sm font-bold w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                        text="Log In"
                        icon={<img src={arrowRight} className="w-4 h-4" />}
                    />
                </div>


            </form>




        </AuthLayout>
    )
}

export default RegisterPage
