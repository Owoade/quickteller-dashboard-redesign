import { Box, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri"; 

const Header = () => {
  return (
    <Flex py={4} bgColor="pink">
      {/* Space Filler */}
      <Box width="100px" height="20px"></Box>
      {/* Seacrch and currency */}
      <Flex>
        <InputGroup color={"brand.typography"}>
          <InputLeftElement pointerEvents="none" />
          <Input
            variant="unstyled"
            width="300px"
            placeholder="Find a beneficiary or biller e.g, DSTV"
            _placeholder={{
                fontSize:"13px"
            }}
          />
          <InputLeftElement transform="translateY(-.5em)" children={<RiSearchLine />} />
        </InputGroup>
      </Flex>
      {/* Profile and Tools */}
    </Flex>
  );
};

export default Header;
