import {
  Box,
  Heading,
  Text,
  chakra,
  HStack,
  Grid,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { RiEyeOffLine } from "react-icons/ri";

export interface ICardType {
  bank: "main" | "gtb" | "alat";
  type: "mastercard" | "verve";
  balance: string;
  cvc: string;
}

export declare const _ICard: ICardType;

const Card = ({ bank, type, balance }: ICardType) => {
  const assets = function (
    bank: typeof _ICard.bank,
    type: typeof _ICard.type
  ){
    let bankImage = "";
    let cardTypeImage = "";
    let bgColor = "";

    switch (bank) {

      case "gtb":
        bankImage = "https://res.cloudinary.com/dles2mycv/image/upload/v1657580841/gtb_u7b1oc.png";
        bgColor = "#e28258";
      break;

      case "main":
        bankImage = "https://res.cloudinary.com/dles2mycv/image/upload/v1656329059/image_2_lvff3e.png";
        bgColor = "brand.accent";
      break;

      case "alat":
        bankImage = "https://res.cloudinary.com/dles2mycv/image/upload/v1657581164/alat_hjwocn.png";
        bgColor = "#DD3047";
      break;
    
    }
    return {
      bankImage,
      bgColor,
      cardTypeImage: type === "mastercard" ? "https://res.cloudinary.com/dles2mycv/image/upload/v1657580841/master-card_ohuf5h.png" : "https://res.cloudinary.com/dles2mycv/image/upload/v1657580841/verve_mxhbey.png"
    }
  };
  const { bankImage, cardTypeImage, bgColor } = assets( bank, type);

  return (
    <Box
      borderRadius="10px"
      overflow={"hidden"}
      bgColor={bgColor}
      position="relative"
      _after={{
        content: "''",
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        left: "-9.5em",
        top: "45px",
        border: "28px solid white",
        background: "transparent",
        opacity: 0.1
        
      }}
      _before={{
        content: "''",
        position: "absolute",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        left: "-10.9em",
        top: "76px",
        border: "25px solid white",
        background: "transparent",
        opacity: 0.3,
      }}
      p={"20px"}
      width={{sm:"100%", base: "290px"}}
      boxSizing="border-box"
    >
     { bank === "main" ? <Grid
        bgColor="white"
        p={9}
        borderRadius="50%"
        right="-1.3em"
        top="-3em"
        position="absolute"
      >
        <Image
          transform="translate(-.2em, 1.2em)"
          src="https://res.cloudinary.com/dles2mycv/image/upload/v1656329059/image_2_lvff3e.png"
        />
      </Grid>
        :
       <Image src={bankImage} position="absolute" right="20px" />}
      <Box>
        <Text color="white" opacity={0.7} fontSize="13px">
          Current eCash Balance
        </Text>
        <Heading size="md" color="white">
          ₦{balance}
        </Heading>
      </Box>
      <Flex mt={6} w="100%">
        <Box>
          <chakra.span color="white">
            <span style={{ opacity: 0.7 }}>5282</span> **** ****{" "}
            <span style={{ opacity: 0.7 }}>1289</span>
          </chakra.span>
          <HStack fontWeight="12px">
            <chakra.span color="white">09/25</chakra.span>
            <chakra.span color="white" opacity={0.7}>
              show cvc
            </chakra.span>
            <RiEyeOffLine
              color="white"
              opacity={0.7}
              transform="translateX(.5em)"
            />
          </HStack>
        </Box>
        <Spacer />
        <Image
          transform="translateY(1em)"
          h="fit-content"
          src={ cardTypeImage }
        />
      </Flex>
    </Box>
  );
};

export default Card;
