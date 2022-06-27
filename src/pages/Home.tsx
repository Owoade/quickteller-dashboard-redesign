import { Box, Text } from "@chakra-ui/react";
import MainContent from "../components/MainContent";
import SideBar from "../components/SideBar";

const Home = () => {
  return(
    <Box position="relative" >
       <SideBar />
       <MainContent />
    </Box>
   
  ) ;
};

export default Home;
