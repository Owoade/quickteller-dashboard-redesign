import { Box, Flex, chakra, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import TableMain from "./TableMain";

interface ILink {
    name: string;
    path: string;
  }
  
export const links: ILink[] = [
    {
      name: "All",
      path: "/",
    },
    {
      name: "Airtime Purchase",
      path: "/",
    },
    {
      name: "Bill Payments",
      path: "/",
    },
    {
      name: "Money Transfer",
      path: "/",
    },
    {
      name: "eCash",
      path: "/",
    },
    {
      name: "Loans",
      path: "/",
    },
  ];
const TableSection = () => {
  const ChakraLink = chakra(Link);
  
  return (
    <Box w="60%" >
      {/* Header Section  */}
      <Flex my={3} justifyContent="space-between" w="100%">
        <Box w="73%">
          <Flex justifyContent="space-between" w="100%">
            {links.map((link) => (
              <ChakraLink fontSize="12px" color="brand.logo" to={link.path}>
                {link.name}
              </ChakraLink>
            ))}
          </Flex>
        </Box>
        <HStack>
            <chakra.span color="brand.accent" fontSize="12px"> Sort by</chakra.span>
           <DropDown position="default" Items={ [
            {
                text:"Recent"
            }
           ] } />

        </HStack>
      </Flex>
      <TableMain />
    </Box>
  );
};



export default chakra(TableSection);
