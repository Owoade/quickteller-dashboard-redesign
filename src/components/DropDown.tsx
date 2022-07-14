import {
  Box,
  HStack,
  Image,
  Text,
  chakra
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FaAngleDown } from "react-icons/fa";
import { ThemeContext } from "../App";

interface IDropdownItems {
  text: string;
  Descriptor?: {
    type: "image" | "icon";
    asset: string | IconType;
  };
}

const DropDown = ({ Items, position }: { Items: IDropdownItems[], position?: "default"  }) => {
  const { scheme } = useContext(ThemeContext);
  const [items, setItems] = useState<IDropdownItems[]>(Items);
  let FirstItem = items[0];
  const FirstItemIcon = items[0]?.Descriptor?.asset as IconType;
  const bottomList = useRef<null | HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box cursor="pointer">
      {/* Selected Item */}
      <HStack
        px={2}
        onClick={() => setIsOpen((prev) => !prev)}
        width="fit-content"
        color={"brand.typography"}
        transform={ position === "default" ? " " :  "translateY(.3em)"}
      >
        {FirstItem.Descriptor && (
          <Box>
            {FirstItem?.Descriptor?.type === "image" ? (
              <Image src={FirstItem?.Descriptor.asset as string} width="32px" />
            ) : (
              <FirstItemIcon />
            )}
          </Box>
        )}

        <Text
          transform="translateX(-.3em)"
          fontSize="13px"
          fontWeight="extrabold"
        >
          {FirstItem.text}
        </Text>
        <FaAngleDown fontSize="12px" />
      </HStack>
      {/* Other Items */}
      <Box
        ref={bottomList}
        bgColor="brand.bgMain"
        transition="0.1s ease opacity"
        opacity={isOpen ? 1 : 0}
        position="absolute"
        boxSizing="border-box"
        mt={1}
        pb={"5px"}
      >
        {items
          .filter((item) => item.text !== FirstItem.text)
          .map((item, i) => (
            <DropDownChild
              itemIndex={i}
              item={item}
              setItems={setItems}
              setIsOpen={setIsOpen}
            />
          ))}
      </Box>
    </Box>
  );
};

function DropDownChild({
  itemIndex,
  item,
  setItems,
  setIsOpen,
}: {
  item: IDropdownItems;
  setItems: Function;
  itemIndex: number;
  setIsOpen: Function;
}) {
  const Icon = item.Descriptor?.asset as IconType;

  return (
    <HStack
      padding={2}
      _hover={{ backgroundColor: "brand.overlay", color: "brand.accent" }}
      width="100px"
      color={"brand.typography"}
      transform="translateY(.3em)"
      onClick={() => {
        setItems((items: IDropdownItems[]) =>
          [item].concat(items.filter((_item) => item.text !== _item.text))
        );
        setIsOpen(false);
      }}
    >
      { item.Descriptor && <Box>
        {item?.Descriptor?.type === "image" ? (
          <Image src={item?.Descriptor.asset as string} width="16px" />
        ) : (
          <Icon />
        )}
      </Box>}

      <Text
        transform="translateX(-.3em)"
        fontSize="13px"
        fontWeight="extrabold"
      >
        {item.text}
      </Text>
    </HStack>
  );
}

export default DropDown;
