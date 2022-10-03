import { Box, Heading, HStack, chakra, Flex, Spacer } from "@chakra-ui/react";
import { tableData } from "../../utils/data";
import { getBankLogo, getServiceProviderLogo, getStatusColor } from "../TableMain";
import React from "react";
import { TransactionContext } from "../../contexts/TransactionContext";
import { ThemeContext } from "../../App";
function M_TransactionCard({ data } : { data: any }) {
    const { type } = React.useContext(TransactionContext)
    const { scheme } = React.useContext(ThemeContext)
  return (
    <Box width={"100%"} boxShadow={scheme.shadow} mb={3} bgColor="brand.bgMain"  borderRadius={"5px"} p={3}>
      <Flex width="100%">
        <HStack>
          <Heading color={"brand.typoContrast2"} size={"sm"}>{type === "Airtime Purchase" || type === "Money Transfer" ? data[1].split("*")[0] : data[1] }</Heading>
          {
            type === "Airtime Purchase"  && getServiceProviderLogo(data[1], true) 
          }
          {
            type === "Money Transfer" && getBankLogo(data[1], true)
          }
        </HStack>
        <Spacer />
        <chakra.span
          display={"block"}
          color={getStatusColor(data[4])[0]}
          borderRadius="20px"
          fontSize={"12px"}
          p={"1px 8px"}
          height="fit-content"
          width="80px"
          textAlign="center"
          bgColor={getStatusColor(data[4])[1]}
          fontWeight={"extrabold"}
        >
          {data[4]}
        </chakra.span>{" "}
      </Flex>
      <chakra.span color="brand.accent" fontSize="20px">
        {data[2]}
      </chakra.span>
      <Flex my={3}>
        <chakra.span color="grey" fontSize="12px">
            {data[3].split(" ")[0]}
        </chakra.span>
        <Spacer />
        <chakra.span color="grey" fontSize="12px">
            {data[0]}
        </chakra.span>

      </Flex>
    </Box>
  );
}

export default M_TransactionCard;
