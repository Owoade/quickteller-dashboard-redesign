import { Box, Flex, Heading, chakra, Text, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import DropDown from "./DropDown";
import { expenses } from "../utils/data";
import { Pie, PieChart } from "recharts";

const AnalyticsSection = () => {
  const { scheme } = useContext(ThemeContext);
  const legends = [
    { expense: "Loans", color: "#2D9CDB" },
    { expense: "Airtime", color: "#F2994A" },
    { expense: "Bill payments", color: "#F2C94C" },
    { expense: "Money Transfer", color: "#EB5757" },
  ];

  return (
    <Box
      bgColor="brand.bgMain"
      borderRadius="10px"
      boxShadow={scheme.shadow}
      p={5}
      w={{lg:"34%", base:"38%"}}
      height="fit-content"
      transform="translateY(3.5em)"
    >
      <Flex w="100%" justifyContent="space-between">
        <Heading transform="translateY(.2em)" fontSize={"18px"}>
          All Expenses
        </Heading>
        <DropDown
         Items={[{ text: "Last month" }, { text: "March"},{ text: "February"}]} 
         />
      </Flex>

      <Flex
        w="100%"
        mt={5}
        pb={3}
        justifyContent="space-between"
        borderBottom="1px solid #F2F2F2"
      >
        {expenses.map((expense) => (
          <Box textAlign="center">
            <chakra.span fontSize="13px" color="grey">
              {expense.type}
            </chakra.span>
            <Text>{expense.amount}</Text>
          </Box>
        ))}
      </Flex>
      <Flex>
        <PieChart width={200} height={200}>
          <Pie
            dataKey={"percent"}
            data={[
              { name: "75%", percent: 75, fill: "#2D9CDB" },
              { name: "70%", percent: 10, fill: "#F2994A" },
              { name: "5%", percent: 5, fill: "#F2C94C" },
              { name: "10%", percent: 10, fill: "#EB5757" },
            ]}
            strokeOpacity={0}
          />
        </PieChart>
        <Box transform="translateY(3em)">
          {legends.map((legend) => (
            <HStack>
              <Box width="10px" h="10px" borderRadius="2px" bgColor={ legend.color }></Box>
              <chakra.span fontSize="13px" >
                { legend.expense }
              </chakra.span>
            </HStack>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default AnalyticsSection;
