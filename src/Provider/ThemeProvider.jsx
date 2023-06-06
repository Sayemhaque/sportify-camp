/* eslint-disable no-unused-vars */
import {createContext,useState} from "react"

export const ThemeContext = createContext()
// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children}) => {
    const [isDarkMode,setIsDarkMode] = useState(false)
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;