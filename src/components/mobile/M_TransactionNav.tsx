import { Flex, HStack, Text } from "@chakra-ui/react"
import Slider from "../Slider"
import { links } from "../TableSection";
import React from "react"
import { ThemeContext } from "../../App";


function M_TransactionNav() {
    const { scheme, theme } = React.useContext(ThemeContext)
  return (
    <Slider>
        <Flex width="600px" boxShadow={ theme ==="light" ? "0 6px 18px 0 rgb(0 35 90 / 8%), 0 0 2px 0 rgb(0 35 90 / 6%)" : `0 6px 18px 0 rgb(0 35 90 / 8%), 0 0 2px 0 ${scheme.bgContrast}`} justifyContent={"space-between"}  bgColor="brand.bgMain">
          { links.map(link => <Text _hover ={{
            bgColor: "brand.overlay",
            color: "brand.accent"
          }} p={3}>{link.name}</Text>) }
        </Flex>
        
    </Slider>
  )
}

export default M_TransactionNav