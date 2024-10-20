import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./darkTheme";
import FullScreenComponent from "./FullScreenComponent";

export const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <FullScreenComponent />
  </ThemeProvider>
);
