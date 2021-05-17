import React, { createContext, useState, useEffect, useMemo} from 'react'

export const ThemeContext = createContext()
export const ThemeUpdate = createContext()

export function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState({ type:'light' })

    const toogleTheme = () => {
        let newTheme = {...theme}
        newTheme.type = theme.type === 'light' ? 'dark' : 'light'

        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme }}>
            <ThemeUpdate.Provider value={{ toogleTheme }}>
                { children }
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
} 