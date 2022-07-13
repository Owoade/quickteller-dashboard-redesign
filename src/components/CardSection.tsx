import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  chakra,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { ThemeContext } from "../App";
import { CreditCardContext } from "../contexts/CreditCardContext";
import Card, { ICardType } from "./Card";
import CardStack from "./CardStack";


const CardSection = () => {
  const { scheme } = useContext(ThemeContext);
  const { cards } = useContext(CreditCardContext);
  console.log(cards)
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
          cards={cards as ICardType[]}
        />
        <CardNav />
      </Box>
  );
};

function CardNav() {
  const { cards, toggleCards, active } = useContext(CreditCardContext);
 

 

  return (
    <HStack width="fit-content" margin="0 auto">
      {[1, 2, 3].map((dot, i) => (
        <Box
          display="block"
          width={i === active ? "20px" : "10px"}
          h="5px"
          borderRadius="20px"
          bgColor={i === active ? "brand.accent" : "#C8C9C9"}
          onClick={()=> toggleCards(i)}
        ></Box>
      ))}
    </HStack>
  );
}

export default CardSection;
