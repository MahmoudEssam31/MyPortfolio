import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function ProjectCard({id, title, img, desc, link}) {
    return (
        <div className="projects">
            <div
                className="Project-card flex flex-col max-w-[24em] 
 h-auto border border-black gap-1">
                <div className="Project-card-img w-full h-[12.5em] overflow-hidden duration-300">
                    <img className="w-full h-full object-cover duration-300 hover:scale-110" src={img} alt="" />
                </div>
                <div className="Project-card-text flex flex-row justify-between items-center gap- p-2">
                    <div className="Project-card-text-left">
                        <h2 className="text-[1.5rem] font-bold">{title}</h2>
                        <p className="text-[1rem] font-serif">{desc}</p>
                    </div>
                    <div className="Project-card-text-right pt-1 cursor-pointer">
                        <a href={link} target="_blank" className="w-[3em] h-[3em] rounded-3xl bg-black text-white flex justify-center items-center hover:scale-110 duration-300">
                            <MdArrowOutward size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
