/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { useTheme } from "next-themes";
import { lightTheme, darkTheme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

 
  const hasPersistor = persistor !== null;

  return (
    <Provider store={store}>
      {hasPersistor ? (
        <PersistGate loading={<div>Loading...</div>} persistor={persistor as any}>
          <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            {children}
          </ThemeProvider>
        </PersistGate>
      ) : (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
          {children}
        </ThemeProvider>
      )}
    </Provider>
  );
};

export default Providers;

