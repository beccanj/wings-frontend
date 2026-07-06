import React from 'react'
import AuthLayout from '../components/AuthLayout'
import InputField from '../../../components/ui/InputField'
import PasswordInput from '../../../components/ui/PasswordInput'
import Buttons from '../../../components/ui/Buttons'
import arrowRight from '../../../assets/buttons/Icon.svg'
import { Link } from "react-router-dom"

const ForgotPassword = () => {
    return (

        

        <AuthLayout
            title="Forgot Password?"
            subTitle="Enter your phone number to receive a reset link"
            footerText="Remember your password?"
            footerLinkText="Sign In"
            footerLink="/signup"
            showSocial = {false}

        >

            <form className=' w-full' action="">
                <InputField
                    label="Phone number"
                    placeholder="Enter your phone number"
                />

                



                <div className="flex justify-center w-full items-center mt-4">
                    <Buttons
                        className="mb-5 text-sm font-bold w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                        text="Send Reset Link"
                        icon={<img src={arrowRight} className="w-4 h-4" />}
                    />
                </div>


            </form>




        </AuthLayout>
    )
}

export default ForgotPassword
