import React from "react";
import SideBarComponantHeader from "../../componant/common/sideBarComponantHeader/SideBarComponantHeader";
import HomePageComponent from "./homePageComponent/HomePageComponent";

export default function HomePage() {

    return (
        <div id="home" className="flex duration-300 ease-in-out lg:flex-row flex-col w-full border-b-2 border-amber-50">
            <SideBarComponantHeader />
            <HomePageComponent />
            
        </div>
    );
}
