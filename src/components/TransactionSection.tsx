import { Box, Flex, chakra, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnalyticsSection from "./AnalyticsSection";
import TableSection from "./TableSection";
const TransactionSection = () => {
  return (
    <Box mt={6}>
      <Heading as="h3" size="md">
        Recent Transactions
      </Heading>
      <Flex my={3} w="100%" justifyContent="space-between">
        <TableSection width={"70%"} />
        <AnalyticsSection />
      </Flex>
    </Box>
  );
};

export default TransactionSection;
