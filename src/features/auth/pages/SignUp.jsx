import React from 'react'
import InputField from '../../../components/ui/InputField'
import PasswordInput from '../../../components/ui/PasswordInput'
import Checkbox from '../../../components/ui/Checkbox'

import arrowRight from '../../../assets/buttons/Icon.svg'
import facebook from '../../../assets/buttons/logos_facebook.svg'
import google from '../../../assets/buttons/material-icon-theme_google.svg'

import Buttons from '../../../components/ui/Buttons'

const SignUp = () => {
    return (
        <section className='flex  justify-center items-center bg-pageBg p-10'>
            <div className='border-borderColor/30 border-2 shadow-[0_1px_4.5px_rgba(0,0,0,0.15)] rounded-[20px] px-6 py-2 flex flex-col items-start justify-start w-xl '>

                <div className='pb-5 py-4 flex justify-center items-center text-primary font-bold text-3xl w-full font-momo'>wings
                </div>

                <div className='flex flex-col gap-2 '>
                    <p className="font-bold text-bodyText text-xl">Create Account</p>
                    <p className="text-subBody text-base">Join as a Worker</p>
                </div>

                <form className='mt-5 w-full' action="">
                    <InputField
                        label="Full Name"
                        placeholder="Enter your full name"
                    />

                    <InputField
                        label="Phone Number"
                        placeholder="712 345 678"
                    />

                    <InputField
                        label="Email (optional)"
                        placeholder="example@wings.com"
                    />

                    <div className="flex justify-between items-center gap-4 mb-6 ">
                        <PasswordInput
                            label="Password"
                            placeholder="Enter password"
                        />

                        <PasswordInput
                            label="Confirm Password"
                            placeholder="Confirm password"
                        />
                    </div>

                    <Checkbox
                        label="I agree to the Terms and Conditions and Privacy Policy."
                    />
                    <div className="flex justify-center w-full items-center ">
                        <Buttons
                            className={`mb-5 text-sm font-bold w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]
`}
                            text="Sign Up"
                            icon={<img src={arrowRight} className="w-4 h-4" />} />

                    </div>

                    <p className="text-center text-subBody text-sm">Already have an account? <span className='font-bold text-primary'>Sign In</span></p>

                </form>

                <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between items-center gap-4 mt-8">
                        <div className="w-full border border-borderColor border-b"></div>
                        <p className="text-subBody text-sm font-bold tracking-[1.2px]">OR</p>
                        <div className="w-full border border-borderColor border-b"></div>
                    </div>

                    <div className="flex flex-row justify-between items-center  w-full my-6">
                        <Buttons
                        text="Google"
                        variant="outline2"
                        className={`text-base font-semibold w-63.75 h-11.5 px-6 py-5 `}
                        icon={<img src={google} className="w-6 h-6" />}
                        iconPosition='left' />

                        <Buttons
                        text="Facebook"
                        variant="outline2"
                        className={`text-base font-semibold w-63.75 h-11.5 px-6 py-5 `}
                        icon={<img src={facebook} className="w-6 h-6" />}
                        iconPosition='left' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
