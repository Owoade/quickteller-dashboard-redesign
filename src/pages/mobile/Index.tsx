import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
import M_Header from "../../components/mobile/M_Header";
import Wrapper from "../../components/Wrapper";
import React from "react"
import M_CardCarousel from "../../components/mobile/M_CardCarousel";
import M_TransactionSection from "../../components/mobile/M_TransactionSection";

export default function Index() {
  const [mobile] = useMediaQuery("(max-width: 500px)");
  const navigate = useNavigate();
  if (!mobile) navigate("/");
  const { scheme } = React.useContext(ThemeContext);
  return (
    <Box>
      <M_Header />
      <Box
        bgColor="brand.bgContrast"
        color="brand.typography"
        height="100%"
        width="100%"
      >
        <Wrapper>
          <Box>
            <Flex w="100%" py={5}>
              <Heading as="h3" size="md">
                Active Card
              </Heading>
              <Spacer />
              <IconButton
                aria-label="add-icon"
                bgColor={"brand.overlay"}
                borderRadius="50%"
                icon={<RiAddLine color={scheme.accent} />}
                transform="translateY(-.4em)"
              ></IconButton>
            </Flex>
            <M_CardCarousel />
          </Box>
        </Wrapper>
        <M_TransactionSection />
      </Box>
    </Box>
  );
}
