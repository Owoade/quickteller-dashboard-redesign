import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { RiAddCircleLine, RiBankLine } from "react-icons/ri";
import { ThemeContext } from "../App";

const AddBankAccount = () => {
    const { scheme } = useContext(ThemeContext)
  return(
    <Box
    bgColor="brand.bgMain"
    p={5}
    width={{lg:"fit-content", base:"33%"}}
    borderRadius="10px"
    height="fit-content"
    boxShadow={scheme.shadow}
    color="brand.logo"
    fontSize="23px"
    textAlign="center"
    transform={{lg:"translate(1em, 2.8em)", base: "translate(0em, 2.8em)"}}
  >
    <RiBankLine width={"fit-content"} style={{ width: "fit-content", margin: "0 auto"}} display="block" />
    <Text my={3}>Add Bank Account</Text>
    <RiAddCircleLine display="block" style={{ width: "fit-content", margin: "0 auto"}} />
  </Box>
  ) ;
};

export default AddBankAccount;
