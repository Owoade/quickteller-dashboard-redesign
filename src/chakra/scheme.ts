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
    typoContrast2: string
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
        shadow: " 0px 4px 25px rgba(197, 197, 197, 0.15);",
        typoContrast2: "#696975"
    },
    dark: {
        bgMain: "#000000",
        bgContrast:"#111111",
        typography: "#E2E2E2",
        typoContrast:"#BDBDBD",
        accent:"#00ACF6",
        logo: "#00ACF6",
        overlay:"#32657c52",
        shadow: "10px 9px 12px 0px rgba(10,10,10,0.66)",
        typoContrast2: "#b0afc1"
    }

    

}
