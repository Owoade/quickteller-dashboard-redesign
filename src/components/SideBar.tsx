import { Box } from "@chakra-ui/react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const SideBar = () => {
  return (
    <Box position="fixed" py={3} height="100vh" width="20%" bgColor={"brand.bgMain"}>
      <Logo />
      <Navigation />
    </Box>
  );
};

export default SideBar;
