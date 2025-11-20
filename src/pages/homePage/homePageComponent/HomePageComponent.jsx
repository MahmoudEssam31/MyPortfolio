import React from "react";
import CustomContainerMain from "../../../componant/customContainter/customContainerMain/CustomContainerMain";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
import { MdOutlineToggleOff, MdOutlineToggleOn, MdWhatsapp } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import SocialMediaComponent from "../../../componant/common/socialMediaComponent/socialMediaComponent";
// import { ThemeToggleButton } from "../../ThemeToggleButton";

export default function HomePageComponent() {

    return (
        <div className="bg-gray-300 lg:w-[72%] w-full dark:bg-amber-100 overflow-hidden pb-[2em]">
            <CustomContainerMain>
                <div className="home-container flex lg:flex-row flex-col md:gap-10 gap-6 lg:mt-16 mt-8 w-full relative">
                    <div className="home-container-img lg:w-1/2 w-full relative z-40">
                        <div className="home-img relative bg-green-100 z-50 lg:w-full md:w-[80%] sm:w-[90%] lg:h-[21.37em] md:h-[31.37em] sm:h-[30.37em] h-[21.37em] overflow-hidden border-22 border-black dark:bg-amber-700 dark:border-white rounded-[68%_32%_100%_0%/0%_75%_25%_100%]">
                            <img src="/homeImg/4.webp" alt="" className="z-100 w-full h-full object-cover" />
                        </div>
                        <div className="animation-circle absolute z-0 sm:top-[-3em] top-[-2em] md:right-2 right-[-1.5em] w-[25em] h-[25em] bg-gray-500 shape1"></div>
                    </div>
                    <div data-aos="fade-left" className="home-container-text flex flex-col md:gap-5 gap-2 lg:w-1/2 w-full">
                        <h2 className="md:text-[3rem] text-[2.2rem] font-bold md:leading-13 leading-12">Frontend Developer</h2>
                        <p className="text-[1.2rem] font-serif">
                            Front-End Developer | React.js | Passionate about building responsive, clean, and interactive web interfaces. Always learning and improving.
                        </p>
                        <div className="home-contact flex flex-col md:gap-8 gap-4">
                            <div className="home-contact-details flex flex-col gap-2 text-[1.2rem]">
                                <div className="email cursor-pointer flex flex-row gap-2 items-center">
                                    <AiOutlineMail className="hover:text-black duration-200 " />
                                    <a href="mailto:mabounar@gmail.com">mabounar@gmail.com</a>
                                </div>
                                <div className="email flex flex-row gap-2 items-center">
                                    <BsTelephone />
                                    <a href="tel:00201220204045">002-01220204045</a>
                                </div>
                            </div>
                            <SocialMediaComponent customClass="flex-row" />
                        </div>
                    </div>
                </div>
            </CustomContainerMain>
        </div>
    );
}
