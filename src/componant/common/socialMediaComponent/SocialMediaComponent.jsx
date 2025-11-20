import clsx from "clsx";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";

export default function SocialMediaComponent({customClass,customClassIcon}) {
    return (
        <div className={clsx("home-contact-social flex gap-3 pb-", customClass)}>
            <a  className={clsx("facebook w-8 h-8 bg-black flex justify-center items-center text-white hover:bg-white hover:text-black duration-300",customClassIcon )} href="" target="_blank" rel="noopener noreferrer">
                <LuFacebook size={22} />
            </a>
            <a
                className="what'sapp w-8 h-8 bg-black flex justify-center items-center text-white hover:bg-white hover:text-black duration-300"
                href="https://wa.me/qr/UGSR2H57PKO7E1"
                target="_blank"
                rel="noopener noreferrer">
                <MdWhatsapp size={22} />
            </a>
            <a
                className="linkedinIn w-8 h-8 bg-black flex justify-center items-center text-white hover:bg-white hover:text-black duration-300"
                href="https://www.linkedin.com/in/mahmoud-essam-11435684?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn size={22} />
            </a>
            <a className="github w-8 h-8 bg-black flex justify-center items-center text-white hover:bg-white hover:text-black duration-300" href="" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub size={22} />
            </a>
        </div>
    );
}
