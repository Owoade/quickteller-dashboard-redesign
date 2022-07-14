import { Box, Flex, chakra, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TableSection from "./TableSection";
const TransactionSection = () => {
  return (
    <Box mt={6}>
      <Heading as="h3" size="md">
        Recent Transactions
      </Heading>
      <Flex>
        <TableSection width={"70%"} />
      </Flex>
    </Box>
  );
};

export default TransactionSection;
