import { Flex, HStack, Text } from "@chakra-ui/react"
import Slider from "../Slider"
import { links } from "../TableSection";
import React, { useState, useContext } from "react"
import { ThemeContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import {TransactionContext} from "../../contexts/TransactionContext"
;


function M_TransactionNav() {
    const { scheme, theme } = React.useContext(ThemeContext);
    const [transactionType, setTransactionType] = useState("All")
    const { type, typeSetter } = useContext(TransactionContext)
    const getActiveStyles = function(isActive: boolean){
         return {
          color: isActive ? "brand.accent" : "brand.typography",
          bgColor: isActive ? "brand.overlay" : "transparent"
        }
      
    }

  return (
    <Slider>
        <Flex width="600px" boxShadow={ theme ==="light" ? "0 6px 18px 0 rgb(0 35 90 / 8%), 0 0 2px 0 rgb(0 35 90 / 6%)" : `0 6px 18px 0 rgb(0 35 90 / 8%), 0 0 2px 0 ${scheme.bgContrast}`} justifyContent={"space-between"}  bgColor="brand.bgMain">
          { links.map((link, i) => <Text 
          {...getActiveStyles(link.name === type)} 
          key={i}
          onClick={() => typeSetter(link.name)}
          cursor="pointer"
          _hover ={{
            bgColor: "brand.overlay",
            color: "brand.accent"
          }} p={3}>{link.name}</Text>) }
        </Flex>
        
    </Slider>
  )
}

export default M_TransactionNav