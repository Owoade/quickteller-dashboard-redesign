import { Box, Flex } from "@chakra-ui/react";
import CardSection from "./CardSection";
import Header from "./Header";
import OverviewSection from "./OverviewSection";
import Wrapper from "./Wrapper";

const MainContent = () => {
  return (
    <Box height="100vh" bgColor={"brand.bgContrast"} width="80%" ml={"20%"}>
      {/* <Header /> */}
      <Header />
      {/* Body */}
      <Wrapper>
        <OverviewSection />
      </Wrapper>
    </Box>
  );
};

export default MainContent;
