import { Box, chakra } from "@chakra-ui/react";
import { useContext } from "react";
import { RiCheckLine } from "react-icons/ri";
import { ThemeContext } from "../App";
import { useTheme } from "../hooks/useTheme";
import Card, { ICardType } from "./Card";

const CardStack = ({ cards }: { cards: ICardType[] }) => {
  const { scheme } = useContext(ThemeContext)
  return (
    <>
      <Box  width="100%"  position="relative" mt={5} height="175px">
        {cards.map((card, i) => (
          <Box
            position="absolute"
            transform={{lg:`translateX(${i * 30}px)`, base:"translateX(0)"}}
            width="100%"
            zIndex={3 - i}
            boxShadow={ i === 2 ? scheme.shadow : ""}
            borderRadius="10px"
          >
            <Card {...card} />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default CardStack;
