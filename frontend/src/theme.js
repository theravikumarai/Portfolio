import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, 
    secondary: { main: "#dc004e" }, 
    dark: {
      main: "#000000",
      contrastText: "#ffffff"
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  buttons: {
    textTransform: "none",
    color: "white",
  },
});

export default theme;
