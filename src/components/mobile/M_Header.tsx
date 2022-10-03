import { Avatar, Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { ThemeContext } from "../../App";
import Logo from "../Logo";
import Wrapper from "../Wrapper";
import M_Logo from "./M_Logo";

export default function M_Header() {
  const { toggleTheme, theme, scheme } = React.useContext(ThemeContext);

  const ThemeIcon = theme === "light" ? RiMoonFill : RiSunFill;
  return (
    <Box width="100%" bgColor={"brand.bgMain"} boxShadow={scheme.shadow} py={3} position="sticky" top={0} zIndex={3} >
      <Wrapper>
        <Flex w="100%">
          <M_Logo />
          <Spacer />
          <HStack width="40px">
            <ThemeIcon
              color={scheme.typography}
              aria-label={`toggle theme`}
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
              style={{ transform: "translateX(-1em)" }}
            />
          </HStack>
          <BiBell
            color={scheme.typography}
            fontSize="20px"
            style={{ transform: "translate(-.7em,.3em)" }}
          />
          <Avatar
              size="sm"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
        </Flex>
      </Wrapper>
    </Box>
  );
}
