import React from "react";
import Logo from "../logo/Logo";
import CustomContainerSide from "../../customContainter/customContainerSide/CustomContainerSide";

export default function SideBarComponantHeader() {
    return (
        <div className="side-bar-header lg:h-auto md:h-[12em] h-[11em] lg:w-[28%] w-full bg-black text-white dark:bg-white dark:text-black z-50">
            <CustomContainerSide customClass={""}>
                <div className="sidebar-Container relative"></div>
                <Logo />
                <div className="hello flex flex-col lg:gap-3 ">
                    <span className="text-[1.2rem] ">
                        <span className="animate-pulse duration-100 text-[.9em]">👋</span> Hello I'm Mahmoud
                    </span>
                    <p className="lg:text-[2.2rem] text-[1.7rem] font-bold font-mono leading-tight">Creative Frontend Developer</p>
                    {/* <div class="animation-circle-sec absolute z-0 sm:top-[16em] top-[-2em] md:left-2 right-[-1.5em] w-[10em] h-[10em] bg-gray-500 shape2"></div> */}
                </div>
            </CustomContainerSide>
        </div>
    );
}
