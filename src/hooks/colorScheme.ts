
export type Mode = "light"  | "dark";

interface IColorSchemeModes{
    light: IScheme;
    dark: IScheme;
}

interface IScheme {
    bgMain: string,
    bgContrast: string,
    typography: string,
    typoContrast: string,
    accent: string,
    logo: string
}

export default function useColorScheme(mode: Mode){

    const scheme: IColorSchemeModes = {
        light: {
            bgMain:"#FFFFFF",
            bgContrast: "#E5E5E5",
            typography: "#1D1D1D",
            typoContrast: "#1D1D1D",
            accent: "#0087C3",
            logo:"#003C58"
        },
        dark: {
            bgMain: "#0D0D0D",
            bgContrast:"#0E0E0E",
            typography: "#E2E2E2",
            typoContrast:"#BDBDBD",
            accent:"#0087C3",
            logo: "#0087C3"
        }

        
    
    }

    return scheme[mode]

}
