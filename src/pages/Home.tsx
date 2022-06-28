import { Box } from "@chakra-ui/react";
import MainContent from "../components/MainContent";
import SideBar from "../components/SideBar";
import { createContext } from "react";
import { Mode } from "../hooks/useColorScheme";
import { IScheme, scheme } from "../chakra/scheme";
import { useTheme } from "../hooks/useTheme";

interface ITheme {
  theme: Mode,
  toggleTheme: Function,
  scheme: IScheme
}


export const ThemeContext = createContext({} as ITheme);

const Home = () => {

  const {toggleTheme, currentTheme} = useTheme();
  const contextValue = {
    theme: currentTheme,
    toggleTheme,
    scheme: scheme[currentTheme]
  }
  return (
    <Box position="relative">
      <ThemeContext.Provider value={contextValue}>
        <SideBar />
        <MainContent />
      </ThemeContext.Provider>
    </Box>
  );
};

export default Home;
