import { Box, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SideBar from "../components/SideBar";

const Home = () => {
  const [mobile] = useMediaQuery('(max-width: 500px)');
  const navigate = useNavigate();

  if( mobile ) navigate("/mobile")


   
  return (
    <Box position="relative" color="brand.typography" bgColor="brand.Contrast">
        <SideBar />
        <MainContent />
    </Box>
  );
};

export default Home;
