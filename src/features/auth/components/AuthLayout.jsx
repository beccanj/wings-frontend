import React from 'react'
import InputField from '../../../components/ui/InputField'
import PasswordInput from '../../../components/ui/PasswordInput'
import Checkbox from '../../../components/ui/Checkbox'

import arrowRight from '../../../assets/buttons/Icon.svg'
import facebook from '../../../assets/buttons/logos_facebook.svg'
import google from '../../../assets/buttons/material-icon-theme_google.svg'

import Buttons from '../../../components/ui/Buttons'
import { Link } from "react-router-dom";

const AuthLayout = ({ title, subTitle, children, footerText, footerLink, footerLinkText, showSocial = true, }) => {
    return (
        // Changed p-10 to p-4 on mobile so it doesn't overflow screen edges
        <section className='flex justify-center items-center bg-pageBg p-4 md:p-10 min-h-screen'>
            {/* Changed w-xl to w-full max-w-xl so it scales down on mobile */}
            <div className='border-borderColor/30 border-2 shadow-[0_1px_4.5px_rgba(0,0,0,0.15)] rounded-[20px] px-4 md:px-7 py-4 flex flex-col items-start justify-start w-full max-w-xl bg-white'>

                <div className='pb-5 py-4 flex justify-center items-center text-primary font-bold text-3xl w-full font-momo'>
                    wings
                </div>

                <div className='flex flex-col gap-2 '>
                    <p className="font-bold text-bodyText text-xl">{title}</p>
                    <p className="text-subBody text-base">{subTitle}</p>
                </div>

                <form className='mt-5 w-full' action="">
                    {children}
                </form>

                <div className="absolute top-0 right-0"></div>


                <p className="text-center text-subBody text-sm mx-auto">{footerText} <Link to={footerLink} className='font-bold text-primary cursor-pointer'>{footerLinkText}</Link></p>

                {showSocial && (<div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between items-center gap-4 mt-8">
                        <div className="w-full border border-borderColor border-b"></div>
                        <p className="text-subBody text-sm font-bold tracking-[1.2px]">OR</p>
                        <div className="w-full border border-borderColor border-b"></div>
                    </div>

                    {/* Changed to flex-col on mobile and removed fixed pixel widths (w-63.75) */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full my-6">
                        <Buttons
                            text="Google"
                            variant="outline2"
                            className="text-base font-semibold w-full sm:w-1/2 h-11.5 px-6 py-3"
                            icon={<img src={google} className="w-6 h-6" />}
                            iconPosition='left'
                        />

                        <Buttons
                            text="Facebook"
                            variant="outline2"
                            className="text-base font-semibold w-full sm:w-1/2 h-11.5 px-6 py-3"
                            icon={<img src={facebook} className="w-6 h-6" />}
                            iconPosition='left'
                        />
                    </div>



                </div>)}

            </div>
        </section>
    )
}

export default AuthLayout
