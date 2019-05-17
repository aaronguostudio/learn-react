import React from 'react'

export const themes = {
  light: {
    background: '#e8e8e8',
    icon: 'primary',
    theme: 'light',
  },
  dark: {
    background: '#333333',
    icon: 'white',
    theme: 'dark',
  },
}

export const ThemeContext = React.createContext(
  {
    theme: themes.light,
    toggleTheme: () => { alert(1) },
  },
)
export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer


