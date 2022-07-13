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
      {/* <Box
        zIndex={10}
        bgColor="#52E586"
        transform="translateY(.8em)"
        width="fit-content"
        m={".2em auto"}
        display="block"
        p={1}
        borderRadius="50%"
      >
        <RiCheckLine fontSize={"18px"} color="white" />
      </Box> */}
      <Box  width="100%"  position="relative" mt={5} height="175px">
        {cards.map((card, i) => (
          <Box
            position="absolute"
            transform={`translateX(${i * 30}px)`}
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
