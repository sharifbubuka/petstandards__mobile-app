import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { useColorScheme } from 'react-native';
import { Theme } from "theme";

type ContextState = {
  toggleTheme: () => void
}

const ThemeContext = createContext({} as ContextState);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const scheme = useColorScheme();

  useEffect(() => {
    if (scheme === 'dark')
      setIsDarkMode(true);
    else setIsDarkMode(false);
  }, [scheme]);

  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  const values = {
    toggleTheme,
    Theme: {
      ...Theme,
      colors: isDarkMode ? Theme.colors.dark : Theme.colors.light,
    },
    test: isDarkMode ? 'dark' : 'light'
  }

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}