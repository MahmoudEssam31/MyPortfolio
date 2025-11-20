import React from "react";
import SideBarComponant from "../../componant/common/sideBarComponant/SideBarComponant";
import ContactMeComponent from "./contactMeComponent/ContactMeComponent";

export default function ContactMe() {
    return (
        <div id="contact" className="bg-gray-300 flex lg:flex-row flex-col w-full border-b-2 border-amber-50 ">
            <SideBarComponant title={"Contact Me"} subject={"Let’s Start A New Project"} />
            <ContactMeComponent/>
        </div>
    );
}
