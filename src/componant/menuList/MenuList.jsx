import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaRegAddressCard } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { ImEarth } from "react-icons/im";
import { RiContactsBookLine } from "react-icons/ri";
import { Link } from "react-scroll";

export default function MenuList() {
    return (
        <div className="menu-list font-mono md-text-green-600  ">
            <div className="home nav-item flex flex-col border  lg:border-gray-200 border-black w-[10em] justify-center items-start fixed right-[-7.6em] top-55 hover:right-[-2em] duration-300 lg:bg-transparent bg-gray-300 hover:text-gray-600 z-50 hover:bg-gray-100">
                <Link to="home" smooth={true} duration={500} offset={-50} className="flex flex-row gap-4 justify-center items-center cursor-pointer">
                    <div className="icon flex justify-center items-center border-r-2 p-2 border-gray-200">
                        <FaHome size={20} className=" " />
                    </div>

                    <h3 className="font-bold  "> Home</h3>
                </Link>
            </div>
            <div className="about nav-item flex flex-col border lg:border-gray-200 border-black w-[10em] justify-center items-start fixed right-[-7.6em] top-64 hover:right-[-2em] duration-300 lg:bg-transparent bg-gray-300 hover:text-gray-600 z-50 hover:bg-gray-100 ">
                <Link to="about" smooth={true} duration={500} offset={-50} className="flex flex-row gap-4 justify-center items-center cursor-pointer">
                    <div className="icon flex justify-center items-center border-r-2 p-2 border-gray-200">
                        <CgProfile size={20} className="" />
                    </div>
                    <h3 className="font-bold  "> About</h3>
                </Link>
            </div>
            <div className="skills nav-item  flex flex-col border lg:border-gray-200 border-black w-[10em] justify-center items-start fixed right-[-7.6em] top-73 hover:right-[-2em] duration-300 lg:bg-transparent bg-gray-300 hover:text-gray-600 z-50 hover:bg-gray-100">
                <Link to="skills" smooth={true} duration={500} offset={-50} className="flex flex-row gap-4 justify-center items-center cursor-pointer">
                    <div className="icon flex justify-center items-center border-r-2 p-2 border-gray-200">
                        <ImEarth size={20} className=" " />

                        {/* <FaRegAddressCard /> */}
                    </div>
                    <h3 className="font-bold  "> Skills</h3>
                </Link>
            </div>
            <div className="projects nav-item  flex flex-col border lg:border-gray-200 border-black w-[10em] justify-center items-start fixed right-[-7.6em] top-82 hover:right-[-2em] duration-300 lg:bg-transparent bg-gray-300 hover:text-gray-600 z-50 hover:bg-gray-100">
                <Link to="projects" smooth={true} duration={500} offset={-50} className="flex flex-row gap-4 justify-center items-center cursor-pointer">
                    <div className="icon flex justify-center items-center border-r-2 p-2 border-gray-200">
                        <GrProjects size={20} className=" " />
                    </div>
                    <h3 className="font-bold">Projects</h3>
                </Link>
            </div>
            <div className="contact nav-item  flex flex-col border lg:border-gray-200 border-black w-[10em] justify-center items-start fixed right-[-7.6em] top-91 hover:right-[-2em] duration-300 lg:bg-transparent bg-gray-300 hover:text-gray-600 z-50 hover:bg-gray-100">
                <Link to="contact" smooth={true} duration={500} offset={-50} className="flex flex-row gap-4 justify-center items-center cursor-pointer">
                    <div className="icon flex justify-center items-center border-r-2 p-2 border-gray-200">
                        <RiContactsBookLine size={20} className=" " />
                    </div>
                    <h3 className="font-bold">Contact</h3>
                </Link>
            </div>
        </div>
    );
}
