
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import useColorScheme, { Mode }  from "../hooks/colorScheme";
import { Button, IconButton } from "./baseStyles";

function config(mode: Mode): ThemeConfig {
    return {
      initialColorMode: mode,
      useSystemColorMode: false
    }
}

export const theme = (mode: Mode) => {
    const scheme = useColorScheme(mode)
    return extendTheme({
        config: {
            ...config(mode)
        },
        styles: {
            body:{
                fontFamily: "Raleway"
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
            ...scheme
        },
        components: {
            Button,
            IconButton
        }

    })

}