import { scheme } from "../chakra/scheme";

export type Mode = "light"  | "dark";

export const useColorScheme = (mode: Mode) => scheme[mode]


