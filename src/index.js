import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#3C4F76', // Здесь укажите желаемый цвет
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#3C4F76',
    },
    secondary: {
      main: '#FF6B6C',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);
