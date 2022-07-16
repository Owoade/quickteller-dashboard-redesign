import { Box, Flex, Heading, VStack, chakra, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import DropDown from "./DropDown";

const AnalyticsSection = () => {
  const { scheme } = useContext(ThemeContext);
  const expenses = [
    { type: "Daily", amount: "₦3,000" },
    { type: "Weekly", amount: "₦5,000" },
    { type: "Monthly", amount: "₦23,200" },
  ];
  return (
    <Box
      bgColor="brand.bgMain"
      borderRadius="10px"
      boxShadow={scheme.shadow}
      p={5}
      w="34%"
    >
      <Flex w="100%" justifyContent="space-between">
        <Heading transform="translateY(.2em)" fontSize={"18px"}>
          All Expenses
        </Heading>
        <DropDown Items={[{ text: "Last month" }]} />
      </Flex>

      <Flex>
        <VStack>
            <chakra.span>daily</chakra.span>
            <Text>₦3,000</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AnalyticsSection;
