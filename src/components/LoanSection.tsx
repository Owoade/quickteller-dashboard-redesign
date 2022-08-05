import { Box, Button, Flex, Image, Spacer, Text } from "@chakra-ui/react";

const LoanSection = () => {
  return (
    <Box
      bgColor="brand.overlay"
      h="fit-content"
      width={{lg:"360px", base:"250px"}}
      borderRadius={"10px"}
      overflow="hidden"
      position="relative"
      transform="translateY(3.7em)"
      p={{lg:"20px", base:"18px 0"}}
      textAlign={{lg:"left", base:"center"}}
      _after={{
        content: "''",
        position: "absolute",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        left: "-50px",
        bottom: "-50px",
        background: "rgba(0, 172, 246, 0.1)",
      }}
      _before={{
        content: "''",
        position: "absolute",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        right: "-50px",
        top: "-50px",
        background: "rgba(0, 172, 246, 0.1)",
      }}
    >
      <Flex w={{lg:"fit",base:"100%"}}>
        <Box w="100%">
          <Text color="brand.accent" fontWeight="extrabold" fontSize="13px">
            INTRODUCING
          </Text>
          <Text fontWeight="extrabold">Quickteller Loans</Text>
          <Text fontSize="12px" my={3}>
            {" "}
            Get Loans in 60 seconds
          </Text>
          <Button
            bgColor="#0087C3"
            color="white"
            _hover={{ backgroundColor: "brand.accent" }}
          >
            Apply now
          </Button>
        </Box>
        <Spacer />
        <Image
          display={{ lg: "block", base: "none" }}
          transform="translateY(1.5em)"
          width="150px"
          height="fit-content"
          src="https://res.cloudinary.com/dles2mycv/image/upload/v1656329060/image_7_ctxl5y.png"
        />
      </Flex>
    </Box>
  );
};

export default LoanSection;
