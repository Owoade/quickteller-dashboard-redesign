import { ColorModeScript, ChakraProvider} from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { theme } from "./chakra";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { currentTheme } = useTheme();
  return (
    <React.Fragment>
      <ColorModeScript
        initialColorMode={theme(currentTheme).config.initialColorMode}
      />
      <ChakraProvider theme={theme(currentTheme)}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ChakraProvider>
    </React.Fragment>
  );
}

export default App;
