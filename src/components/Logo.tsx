import { Flex, Text, Image } from "@chakra-ui/react";

const Logo = () => {
  const logoStyles = {
    color: "brand.logo",
    _after: {
      backgroundColor: "brand.logo",
      width: "3px",
      height: "5px",
      bottom: "0.65em",
      left: "0.55em",
      transform: "rotate(120deg)",
    },
    _before: {
      backgroundColor: "brand.bgMain",
      width: "80px",
      height: "5px",
      content: '""',
      top:"5px",
      left:"15px"
    },
  };
  return (
    <Flex mx="auto" width="70%" >
      <Text
        fontWeight="extrabold"
        fontSize="20px"
        fontFamily="Ubuntu"
        color="brand.logo"
        position="relative"
        _after={{ ...logoStyles._after, content: '""', position: "absolute" }}
        _before={{ ...logoStyles._before, position: "absolute" }}
        transform = "translateY(.3em)"
      >
        Ouickteller
      </Text>
      <Image src="https://res.cloudinary.com/dles2mycv/image/upload/v1656329059/image_2_lvff3e.png" />
    </Flex>
  );
};

export default Logo;
