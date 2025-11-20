import React, { useEffect } from "react";
// import SideBarComponant from './componant/common/sideBarComponant/SideBarComponant'
// import SideBarComponantHeader from './componant/common/sideBarComponantHeader/SideBarComponantHeader';
// import HomePageComponent from './pages/homePage/homePageComponent/HomePageComponent';
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import ContactMe from "./pages/contectMe/ContactMe";
import MenuList from "./componant/menuList/MenuList";
import Projects from "./pages/projects/Projects";
import Footer from "./componant/common/layot/Footer";

import LoadingPage from "./componant/loadingPage/LoadingPage";
import ThemeToggle from "./componant/common/themes/ThemeToggle";
import AOS from "aos";
import "aos/dist/aos.css";
// import LoadingPage from "./componant/loadingPage/LoadingPage";

export default function App() {
  useEffect(() => {
      AOS.init({
          duration: 1000, // مدة الأنيميشن بالمللي ثانية
          once: true, // تشغيل الانيميشن مرة واحدة فقط عند الظهور
      });
  }, []);

    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2850);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-screen flex justify-center items-center h-screen bg-gray-200 duration-500">
               <LoadingPage />
                {/* <div className="loader"></div>
                <p className="loading-text">Loading Portfolio...</p> */}
            </div>
        );
    }
    return (
        // <ThemeProvider attribute="class" defaultTheme="light">
        <div className="relative overflow-hidden">
            <div className="absolute right-5 top-5  ">
                {/* <ThemeToggleButton /> */}
                {/* <ThemeToggle /> */}
               
            </div>
            <div className=" font-mono absolute left-5 top-15 ">
                <MenuList />
            </div>
            <HomePage />
            <AboutPage />
            <SkillsPage />
            <Projects />
            <ContactMe />
            <Footer />
        </div>
        // </ThemeProvider>
    );
}
