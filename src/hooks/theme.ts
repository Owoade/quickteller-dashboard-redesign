import React from "react"
import { Mode } from "./colorScheme";

export function useTheme() {
  function getTheme(): Mode {
    return localStorage.getItem("ui-theme") as Mode || "light"
  }
  function saveTheme(theme: Mode) {
    localStorage.setItem("ui-theme", theme.toString());
  }

  const [currentTheme, setCurrentTheme] = React.useState<Mode>("light");

  const toggleTheme = React.useCallback((newTheme: Mode) => {
    setCurrentTheme(newTheme)
    saveTheme(newTheme);
  }, []);

  function isLightTheme<T>(arg1: T, arg2: T) {
    return currentTheme === "light" ? arg1 : arg2;
  }

  return {currentTheme, toggleTheme, isLightTheme};
}