import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/darkTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/*  <ThemeProvider theme={darkTheme}> */}
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
