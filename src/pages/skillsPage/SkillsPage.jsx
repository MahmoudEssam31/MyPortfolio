import React from "react";
import SideBarComponant from "../../componant/common/sideBarComponant/SideBarComponant";
import SkillPageComponent from "./SkillPageComponent/SkillPageComponent";
// import SkillsCard from "./skillsCard/SkillsCard";

export default function SkillsPage() {

    return (
        <div id="skills" className="flex duration-300 ease-in-out lg:flex-row flex-col w-full border-b-2 border-amber-50">
            <SideBarComponant title={"Skills"} subject={"My expertise skills"} />
            <SkillPageComponent />
        </div>
    );
}
