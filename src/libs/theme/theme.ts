import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0C1734", 
    },
    secondary: {
      main: "#14FD30", 
    },
    background: {
      default: "#ffffff", 
      paper: "#f5f5f5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#0C1734",
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff", 
    },
    secondary: {
      main: "#14FD30",
    },
    background: {
      default: "#121212", 
      paper: "#1d1d1d",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#0C1734",
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});
