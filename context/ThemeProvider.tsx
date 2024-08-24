import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
    mode:string,
    setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined);

export const ThemeProvider = ({children} : {children : React.ReactNode})=>{
    const [mode, setMode] = useState('');

   
    const handleThemeChnage = ()=>{
        if (localStorage.theme == 'dark' || (!("theme" in localStorage) && window.matchMedia("(prefers-color-schema: dark)").matches)){
            setMode("dark");

            document.documentElement.classList.add('dark');
        }
        else{
            setMode('light');
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(()=>{
        handleThemeChnage();
    },[mode])


    return (
    <ThemeContext.Provider value = {{mode, setMode}}>
    {children}
    </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

