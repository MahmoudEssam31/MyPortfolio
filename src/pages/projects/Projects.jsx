import React from 'react'
import SideBarComponant from '../../componant/common/sideBarComponant/SideBarComponant';
import ProjectsComponent from './projectsComponent/ProjectsComponent';
// import ProjectsComponent from './projectsComponent/ProjectsComponent';

export default function Projects() {
    return (
        <div id="projects" className="projects flex lg:flex-row flex-col w-full border-b-2 border-amber-50">
            <SideBarComponant title={"Portfolio"} subject={"My Recent Works"} />
            <ProjectsComponent />
        </div>
    );
}
