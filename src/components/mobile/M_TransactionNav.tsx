import { Flex, HStack, Text } from "@chakra-ui/react"
import Slider from "../Slider"
import { links } from "../TableSection"


function M_TransactionNav() {
  return (
    <Slider>
        <Flex width="600px" justifyContent={"space-between"} bgColor="brand.bgMain">
          { links.map(link => <Text _hover ={{
            bgColor: "brand.overlay",
            color: "brand.accent"
          }} p={3}>{link.name}</Text>) }
        </Flex>
    </Slider>
  )
}

export default M_TransactionNav