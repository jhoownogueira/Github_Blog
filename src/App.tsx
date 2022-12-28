import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Home />
    </ThemeProvider>
  )
}