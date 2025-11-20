import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";

export default function SkillsCard({ id, presentage, title, icon }) {
    // const skillCardData = SkillsCard;
    return (
        <div
            className="skill-card bg-white flex flex-col justify-center items-center py-[1em] group"
            style={{
                borderRadius: "50% 50% 100% 100% / 30% 30% 100% 100%",
            }}>
            <div className="skill-card-icon group-hover:scale-120 duration-400">{icon}</div>
            <p className="inline-block font-extrabold font-mono text-[2.8em] ">{presentage}%</p>
            <p className="inline-block font-mono md:text-[1.1em] text-[.9em] text-gray-600">{title}</p>
        </div>
    );
}
