"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { lightTheme, darkTheme } from "../theme/theme";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const { theme } = useTheme();

  const hasPersistor = persistor !== null;

  return (
    <Provider store={store}>
      {hasPersistor ? (
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
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
