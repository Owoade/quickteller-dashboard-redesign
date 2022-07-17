import { Box } from "@chakra-ui/react";
import MainContent from "../components/MainContent";
import SideBar from "../components/SideBar";

const Home = () => {

  return (
    <Box position="relative" color="brand.typography" bgColor="brand.Contrast">
        <SideBar />
        <MainContent />
    </Box>
  );
};

export default Home;
