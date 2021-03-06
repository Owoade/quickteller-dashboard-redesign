interface IColorSchemeModes{
    light: IScheme;
    dark: IScheme;
}

export interface IScheme {
    bgMain: string,
    bgContrast: string,
    typography: string,
    typoContrast: string,
    accent: string,
    logo: string,
    overlay: string,
    shadow: string
}

export const scheme: IColorSchemeModes = {
    light: {
        bgMain:"#FFFFFF",
        bgContrast: "#F7F8FA",
        typography: "#1D1D1D",
        typoContrast: "#1D1D1D",
        accent: "#00ACF6",
        logo:"#003C58",
        overlay: "#9de0ff65",
        shadow: " 0px 4px 25px rgba(197, 197, 197, 0.15);"
    },
    dark: {
        bgMain: "#0D0D0D",
        bgContrast:"#0E0E0E",
        typography: "#E2E2E2",
        typoContrast:"#BDBDBD",
        accent:"#00ACF6",
        logo: "#00ACF6",
        overlay:"#9de0ff65",
        shadow: "10px 9px 12px 0px rgba(10,10,10,0.66)"
    }

    

}
