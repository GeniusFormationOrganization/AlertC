import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const [darkMode, setDarkMode] = useState(() => {

        const saved = localStorage.getItem("darkMode");

        return saved === "true";

    });

    useEffect(() => {

        localStorage.setItem("darkMode", darkMode);

        if (darkMode) {

            document.body.classList.add("dark");

        } else {

            document.body.classList.remove("dark");

        }

    }, [darkMode]);

    function toggleTheme() {

        setDarkMode(!darkMode);

    }

    return (

        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme
            }}
        >

            {children}

        </ThemeContext.Provider>

    );

}

export function useTheme() {

    return useContext(ThemeContext);

}