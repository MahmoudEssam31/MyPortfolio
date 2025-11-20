import React from "react";
import SideBarComponant from "../../componant/common/sideBarComponant/SideBarComponant";
import AboutPageComponent from "./aboutPageComponent/AboutPageComponent";
import SocialMediaComponent from "../../componant/common/socialMediaComponent/socialMediaComponent";

export default function AboutPage() {
    return (
        <div id="about" className="flex duration-300 ease-in-out lg:flex-row flex-col w-full border-b-2 border-amber-50">
            <SideBarComponant title={"About Me"} subject={"Front-End Developer on a Journey"} />
            <AboutPageComponent />
        </div>
    );
}
