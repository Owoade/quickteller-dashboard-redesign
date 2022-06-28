import { Box, Flex, HStack, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri"; 
import { FaAngleDown } from "react-icons/fa"; 
import { RiSunFill, RiMoonFill } from  "react-icons/ri";

import { useContext } from "react";
import { ThemeContext } from "../pages/Home";


const Header = () => {
  
  const {theme, toggleTheme, scheme} = useContext(ThemeContext);
 
   console.log(theme) 
  const ThemeIcon = theme === "light"  ? RiMoonFill : RiSunFill ;

  return (
    <Flex py={4} bgColor={scheme.bgMain}>
      {/* Space Filler */}
      <Box width="25%" height="20px"></Box>
      {/* Seacrch and currency */}
      <Flex>
        <InputGroup color={"brand.typography"}>
          <InputLeftElement pointerEvents="none" />
          <Input
            variant="unstyled"
            width="270px"
            placeholder="Find a beneficiary or biller e.g, DSTV"
            _placeholder={{
                fontSize:"13px"
            }}
          />
          <InputLeftElement transform="translateY(-.5em)" children={<RiSearchLine />} />
        </InputGroup>
        <HStack width="100px" color="brand.typography">
            <Image width="16px" src="https://res.cloudinary.com/dles2mycv/image/upload/v1656370743/nigeria_nox0vt.png" />
            <Text transform="translateX(-.3em)" fontSize="13px" fontWeight="extrabold">NG</Text>
            <FaAngleDown fontSize="12px" />
        </HStack>
      </Flex>
      {/* Profile and Tools */}
      <HStack>
       <ThemeIcon color={scheme.typography}  aria-label={`toggle theme`} onClick={() => toggleTheme( theme == "light" ? "dark" : "light" )} />
       
      </HStack>

    </Flex>
  );
};

export default Header;
