import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Mode }  from "../hooks/useColorScheme";
import { Button, IconButton } from "./baseStyles";
import {scheme} from "./scheme";

function config(mode: Mode): ThemeConfig {
    return {
      initialColorMode: mode,
      useSystemColorMode: false
    }
}

export const theme = (mode: Mode) => {
   
    return extendTheme({
        config: {
            ...config(mode)
        },
        styles: {
            body:{
                fontFamily: "Raleway !important"
            },
            global:{
                "*": {
                    fontFamily: "Raleway"
                }
            }
        },
        breakpoints: {
            xs: "480px",
            sm: "600px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
            "2xl": "1536px",
        },
        colors: {
            brand:{
                ...scheme[mode]
            }
        },
        components: {
            Button,
            IconButton
        }

    })

}