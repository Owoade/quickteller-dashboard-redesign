import { Box, Flex, Text } from "@chakra-ui/react";
import { RiAddCircleLine, RiAddLine, RiBankLine } from "react-icons/ri";
import CreditCardContextProvider from "../contexts/CreditCardContext";
import AddBankAccount from "./AddBankAccount";
import CardSection from "./CardSection";
import LoanSection from "./LoanSection";

const OverviewSection = () => {
  return (
    <Flex w="100%" pt="1.5em" justifyContent={"space-between"}>
      <CreditCardContextProvider>
        <CardSection />
      </CreditCardContextProvider>
     <AddBankAccount />
     <LoanSection />

    </Flex>
  );
};

export default OverviewSection;
