import { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
    mode:string,
    setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined);

export const ThemeProvider = ({children} : {children : React.ReactNode})=>{
    const [mode, setMode] = useState('');


    const handleThemeChnage = ()=>{
        if (mode === 'dark'){
            setMode("light");

            document.documentElement.classList.add('light');
        }
        else{
            setMode('dark');
            document.documentElement.classList.add('dark')
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

export function useTheme (){
    const context = useContext(ThemeContext);
    return context
}

