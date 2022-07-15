import { ColorModeScript, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { theme } from "./chakra";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Mode } from "./hooks/useColorScheme";
import { IScheme, scheme } from "./chakra/scheme";

interface ITheme {
  toggleTheme: Function;
  theme: Mode;
  scheme: IScheme

}
export const ThemeContext = React.createContext({} as ITheme)

function App() {
  const { currentTheme, toggleTheme } = useTheme();
  return (
    <React.Fragment>
      <ColorModeScript
        initialColorMode={theme(currentTheme).config.initialColorMode}
      />

      <ChakraProvider theme={theme(currentTheme)}>
        <ThemeContext.Provider value={{toggleTheme, theme: currentTheme, scheme: scheme[currentTheme]}}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/transactions/:transactionType" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        </ThemeContext.Provider> 
        
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;