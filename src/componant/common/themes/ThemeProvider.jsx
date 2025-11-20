// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//     const [theme, setTheme] = useState("light");

//     // عند تحميل الصفحة
//     useEffect(() => {
//         const savedTheme = localStorage.getItem("theme");
//         if (savedTheme) {
//             setTheme(savedTheme);
//             document.documentElement.classList.toggle("dark", savedTheme === "dark");
//         }
//     }, []);

//     const toggleTheme = () => {
//         const newTheme = theme === "light" ? "dark" : "light";
//         setTheme(newTheme);
//         document.documentElement.classList.toggle("dark", newTheme === "dark");
//         localStorage.setItem("theme", newTheme);
//     };

//     return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
// };

// // هتستخدمه في أي مكان عشان توصّل الزرار بـ context
// export const useTheme = () => useContext(ThemeContext);
