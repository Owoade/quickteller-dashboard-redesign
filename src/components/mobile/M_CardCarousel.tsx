import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { cardStack } from "../../contexts/CreditCardContext";
import Card from "../Card";
import Slider from "../Slider";

type Props = {};

function M_CardCarousel({}: Props) {
  return (
    <Box w="100%" overflowX="hidden" mb={3}>
      <Slider>
        <HStack width="fit-content" overflowX="scroll">
          {cardStack[0].map((card) => (
            <Card {...card} />
          ))}
        </HStack>
      </Slider>
    </Box>
  );
}

export default M_CardCarousel;
