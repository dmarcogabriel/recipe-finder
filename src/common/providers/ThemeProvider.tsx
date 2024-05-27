import { createContext,PropsWithChildren, useCallback, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

type IThemeMode = undefined | 'light' | 'dark';

type IThemeProviderValue = {
  isDarkMode: boolean
  handleSwitchTheme: () => void
};

export const ThemeContext = createContext<IThemeProviderValue>({
  isDarkMode: false,
  handleSwitchTheme: () => {}
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<IThemeMode>('light');
  
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode
      }
    });
  }, [mode]);

  const handleSwitchTheme = useCallback(() => {
    setMode(prevMode => {
      if (prevMode === 'dark') return 'light';

      return 'dark';
    });
  }, []);

  const isDarkMode = mode === 'dark';

  const value = useMemo(() => ({
    isDarkMode,
    handleSwitchTheme
  }), [isDarkMode, handleSwitchTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};