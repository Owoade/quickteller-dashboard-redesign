import { ComponentStyleConfig, keyframes } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
    baseStyle: {
        fontFamily: "Raleway",
        fontWeight: "light",
        _focus: {
            outline: "none"
        }
    }
}

export const IconButton : ComponentStyleConfig = {
    baseStyle: {
        fontWeight: "light",
        _focus: {
            outline: "none"
        }
    }
}