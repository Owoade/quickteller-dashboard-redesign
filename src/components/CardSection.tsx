import { Box, Button, Flex, Heading, HStack, Spacer, chakra } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { ThemeContext } from "../App";
import Card from "./Card";
import CardStack from "./CardStack";

const CardSection = () => {
  const { scheme } = useContext(ThemeContext);
  return (
    <Box>
      <HStack width="280px">
        <Heading as="h3" size="md">
          Active Card
        </Heading>
        <Spacer />
        <Button
          bgColor="brand.overlay"
          rightIcon={<RiAddLine color={scheme.accent} />}
          color="brand.accent"
        >
          New card
        </Button>
      </HStack>
      <CardStack
        cards={[{ bank: "main", type: "mastercard", balance: "2,000" }, { bank: "gtb", type: "verve", balance: "2,000" }, { bank: "alat", type: "mastercard", balance: "5,000" }]}
      />
        <CardNav />
    </Box>
  );
};

function CardNav(){
    const [active, setActive] = useState(0);


    return (
        <HStack>
            { [1,2,3].map((dot,i) => <Box display="block" width={ i === active ? "30px" : "20px" } h="10px" bgColor={i === active ? "brand.accent" : "red"}></Box> )}
        </HStack>
    )
}

export default CardSection;
