import React, { useEffect, useState } from "react";

export default function TestThemeButton() {
    const themes = ["light", "dark"];
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.className = `theme-${theme}`;
        console.log("✅ Current theme:", theme);
    }, [theme]);

    return (
        <button
            onClick={() => {
                const currentIndex = themes.indexOf(theme);
                const nextTheme = themes[(currentIndex + 1) % themes.length];
                setTheme(nextTheme);
            }}
            className="p-4 bg-blue-500 text-white rounded-md">
            Change Theme ({theme})
        </button>
    );
}
