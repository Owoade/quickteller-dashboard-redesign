import { Box } from "@chakra-ui/react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useContext } from "react";
import { ThemeContext } from "../pages/Home";

const SideBar = () => {
  const { scheme } = useContext(ThemeContext);
  return (
    <Box position="fixed" py={3} height="100vh" width="20%" bgColor={scheme.bgMain}>
      <Logo />
      <Navigation />
    </Box>
  );
};

export default SideBar;
