
"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { lightTheme, darkTheme } from "../theme/theme";
import { ReactNode } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const { theme } = useNextTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

 
  const currentTheme = createTheme(theme === "dark" ? darkTheme : lightTheme);

  return (
    <Provider store={store}>
      {isClient ? (
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <NextThemeProvider>
            <MUIThemeProvider theme={currentTheme}>
              {children}
            </MUIThemeProvider>
          </NextThemeProvider>
        </PersistGate>
      ) : (
        <NextThemeProvider>
          <MUIThemeProvider theme={currentTheme}>
            {children}
          </MUIThemeProvider>
        </NextThemeProvider>
      )}
    </Provider>
  );
};

export default Providers;



