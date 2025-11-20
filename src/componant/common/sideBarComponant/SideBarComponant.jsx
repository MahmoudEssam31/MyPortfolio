import React from 'react'
import CustomContainerSide from '../../customContainter/customContainerSide/CustomContainerSide'

export default function SideBarComponant({ title, subject }) {
    return (
        <div className="sidebar lg:h-auto md:h-[12em] h-[9em] lg:w-[28%] w-full bg-black text-white ">
            <CustomContainerSide customClass={""}>
                <div className="sidebar-Container "></div>
                <div className="hello flex flex-col lg:gap-3 gap-1 justify-center">
                    <span
                        className="text-[1.5rem] font-semibold lg:pt-[2.4em] md:pt-[1em] pt-[.5em]">
                        {title}
                    </span>
                    <p className="md:text-[2.5rem] text-[1.8rem] font-bold font-mono leading-tight ">{subject}</p>
                </div>
            </CustomContainerSide>
        </div>
    );
}
