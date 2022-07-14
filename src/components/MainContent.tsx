import { Box } from "@chakra-ui/react";
import Header from "./Header";
import OverviewSection from "./OverviewSection";
import TransactionSection from "./TransactionSection";
import Wrapper from "./Wrapper";

const MainContent = () => {
  return (
    <Box height="100%" bgColor={"brand.bgContrast"} width="80%" ml={"20%"}>
      {/* <Header /> */}
      <Header />
      {/* Body */}
      <Wrapper>
        <Box w="100%">
          <OverviewSection />
          <TransactionSection />
        </Box>
      </Wrapper>
    </Box>
  );
};

export default MainContent;
