import React from "react";
import CustomContainerMain from "../../../componant/customContainter/customContainerMain/CustomContainerMain";
import ProjectCard from "../projectCard/ProjectCard";
import { ProjectsData } from "../../../componant/Data/Data";

export default function ProjectsComponent() {
    const productsData = ProjectsData;
    return (
        <div className="projects py-[4em] bg-gray-300 lg:w-[72%] w-full dark:bg-amber-100">
            <CustomContainerMain>
                <div className="pro grid gap-x-[.5em] gap-y-8 sm:grid-cols-2 grid-cols-1 justify-items-center">
                    {productsData.map((item) => (
                        <ProjectCard key={item.id} title={item.title} img={item.img} link={item.link} id={item.id} desc={item.desc} />
                    ))}
                </div>
            </CustomContainerMain>
        </div>
    );
}
