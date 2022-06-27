import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import * as RI from "react-icons/ri";
import { useColorScheme } from "../hooks/useColorScheme";
import { useTheme } from "../hooks/useTheme";
interface ILink {
  path: string;
  name: string;
  Icon: IconType;
  active?: boolean;
}
const Navigation = () => {
  const links: ILink[] = [
    {
      path: "/",
      name: "DASHBOARD",
      Icon: RI.RiDashboardFill,
      active: true,
    },
    {
      path: "/",
      name: "SEND/RECIEVE MONEY",
      Icon: RI.RiExchangeFundsLine,
    },
    {
      path: "/",
      name: "BUY AIRTIME & MOBILE DATA",
      Icon: RI.RiSmartphoneLine,
    },
    {
      path: "/",
      name: "PAY BILLS",
      Icon: RI.RiBankCardLine,
    },
    {
      path: "/",
      name: "BOOK A FLIGHT",
      Icon: RI.RiFlightTakeoffLine,
    },
    {
      path: "/",
      name: "REQUEST FOR LOAN",
      Icon: RI.RiCheckboxCircleLine,
    },
    {
      path: "/",
      name: "MORE",
      Icon: RI.RiMoreLine,
    },
  ];

  return (
    <Box mt={10}>
      {links.map((link) => (
        <NavItem link={link} />
      ))}

      <Box
        className="logout__link"
        color="#F08585"
        transform="translateY(4em)"
        padding={".5em 0 1em 0"}
        cursor="pointer"
      >
        <Flex width="70%" mx="auto">
          <RI.RiLogoutBoxRLine style={{ transform: "translateY(.3em)" }} />
          <Text fontSize="13px" transform="translate(.7em,.3em)">
            LOGOUT
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

function NavItem({ link }: { link: ILink }) {
  const { currentTheme } = useTheme();
  const Icon = link.Icon;

  const scheme = useColorScheme(currentTheme);

  return (
    <Box
      borderLeft={link?.active ? `5px solid ${scheme.accent}` : ""}
      color={link?.active ? scheme.accent : scheme.typography}
      bgColor={link?.active ? scheme.overlay : ""}
      padding={".5em 0 1em 0"}
      my={3}
      transition="ease .5s"
      cursor={"pointer"}
      _hover={{
        bgColor: !link.active ? scheme.overlay : "",
        color: !link.active ? scheme.accent : "",
      }}
    >
      <Flex width="70%" mx="auto">
        <Icon style={{ transform: "translateY(.3em)" }} />
        <Text
          fontSize="13px"
          fontWeight={link?.active ? "extrabold" : "normal"}
          transform="translate(.7em,.3em)"
        >
          {link.name}
        </Text>
      </Flex>
    </Box>
  );
}

export default Navigation;
