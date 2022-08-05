import { Box } from "@chakra-ui/react";
import Header from "./Header";
import OverviewSection from "./OverviewSection";
import TransactionSection from "./TransactionSection";
import Wrapper from "./Wrapper";

const MainContent = () => {
  return (
    <Box height="100%" pb={5} bgColor={"brand.bgContrast"} width={{xl:"80%", base: "93.9%"}} ml={{xl:"20%", base: "6.1%"}}>
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
