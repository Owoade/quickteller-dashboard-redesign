import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { RiSunFill, RiMoonFill } from "react-icons/ri";

import { useContext } from "react";
import { ThemeContext } from "../App";
import DropDown from "./DropDown";
import Wrapper from "./Wrapper";

const Header = () => {
  const { toggleTheme, theme, scheme } = useContext(ThemeContext);

  const ThemeIcon = theme === "light" ? RiMoonFill : RiSunFill;

  return (
    <Box bgColor={"brand.bgMain"}>
      <Wrapper>
        <Flex py={4} width="100%" justifyContent="space-between">
          {/* Space Filler */}
          <Box width="5%" height="20px"></Box>
          {/* Seacrch and currency */}
          <Flex>
            <InputGroup color={"brand.typography"}>
              <InputLeftElement pointerEvents="none" />
              <Input
                variant="unstyled"
                width="270px"
                placeholder="Find a beneficiary or biller e.g, DSTV"
                _placeholder={{
                  fontSize: "13px",
                }}
              />
              <InputLeftElement
                transform="translateY(-.2em)"
                children={<RiSearchLine />}
              />
            </InputGroup>
            {/* <HStack width="100px" color={"brand.typography"}>
            <Image
              width="16px"
              src="https://res.cloudinary.com/dles2mycv/image/upload/v1656370743/nigeria_nox0vt.png"
            />
            <Text
              transform="translateX(-.3em)"
              fontSize="13px"
              fontWeight="extrabold"
            >
              NG
            </Text>
            <FaAngleDown fontSize="12px" />
          </HStack> */}

            <DropDown
              Items={[
                {
                  text: "NRA",
                  Descriptor: {
                    type: "image",
                    asset:
                      "https://res.cloudinary.com/dles2mycv/image/upload/v1656370743/nigeria_nox0vt.png",
                  },
                },
                {
                  text: "USD",
                  Descriptor: {
                    type: "image",
                    asset:
                      "https://res.cloudinary.com/dles2mycv/image/upload/v1656537002/united-states_1_mnljb9.png",
                  },
                },
                {
                  text: "GBP",
                  Descriptor: {
                    type: "image",
                    asset:
                      "https://res.cloudinary.com/dles2mycv/image/upload/v1656537002/united-kingdom_1_ji5nej.png",
                  },
                },

                {
                  text: "EUR",
                  Descriptor: {
                    type: "image",
                    asset:
                      "https://res.cloudinary.com/dles2mycv/image/upload/v1656537002/european-union_fkki0b.png",
                  },
                },
              ]}
            />
          </Flex>
          {/* Profile and Tools */}
          <HStack>
            <ThemeIcon
              color={scheme.typography}
              aria-label={`toggle theme`}
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
              style={{ transform: "translateX(-1em)" }}
            />
            <Avatar
              size="sm"
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
            <Box transform="translateY(-.4em)">
              <DropDown
                Items={[
                  {
                    text: "Segun Adebayo",
                  },
                  {
                    text: "Lanre Malumi",
                  },
                  {
                    text: "Owoade Anuoluwapo",
                  },
                ]}
              />
            </Box>
          </HStack>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Header;
