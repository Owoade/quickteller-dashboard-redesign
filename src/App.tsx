import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { theme } from './chakra';
import { useTheme } from './hooks/useTheme';
import Home from "./pages/Home"
function App() {
  const { currentTheme, toggleTheme, isLightTheme } = useTheme();
  return (
    <React.Fragment>
      <ColorModeScript initialColorMode={theme(currentTheme).config.initialColorMode} />
      <ChakraProvider theme={theme(currentTheme)}>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </ChakraProvider>

    </React.Fragment>

  );
}

export default App;
