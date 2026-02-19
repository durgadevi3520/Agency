import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  colorPalette: string;
  setTheme: (theme: "light" | "dark") => void;
  setColorPalette: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );
  const [colorPalette, setColorPalette] = useState(
    localStorage.getItem("colorPalette") || "purple"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("colorPalette", colorPalette);
    document.documentElement.setAttribute("data-color", colorPalette);
  }, [colorPalette]);

  return (
    <ThemeContext.Provider value={{ theme, colorPalette, setTheme, setColorPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
