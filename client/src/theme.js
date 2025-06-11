// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FF00",
    100: "#CCFF00",
    200: "#99FF00",
    300: "#66FF00",
    400: "#33FF00",
    500: "#00FF00", // Neon green
    600: "#00CC00",
    700: "#009900",
    800: "#006600",
    900: "#003300",
  },
  secondary: {
    50: "#00E6FF",
    100: "#00CCFF",
    200: "#0099FF",
    300: "#0066FF",
    400: "#0033FF",
    500: "#0000FF", // Neon blue
    600: "#0000CC",
    700: "#000099",
    800: "#000066",
    900: "#000033",
  },
  accent: {
    50: "#FF00FF",
    100: "#FF00CC",
    200: "#FF0099",
    300: "#FF0066",
    400: "#FF0033",
    500: "#FF0000", // Neon red
    600: "#CC0000",
    700: "#990000",
    800: "#660000",
    900: "#330000",
  }
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            secondary: {
              dark: colorTokens.secondary[200],
              main: colorTokens.secondary[500],
              light: colorTokens.secondary[800],
            },
            accent: {
              dark: colorTokens.accent[200],
              main: colorTokens.accent[500],
              light: colorTokens.accent[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[1000],
              alt: colorTokens.grey[900],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            secondary: {
              dark: colorTokens.secondary[700],
              main: colorTokens.secondary[500],
              light: colorTokens.secondary[50],
            },
            accent: {
              dark: colorTokens.accent[700],
              main: colorTokens.accent[500],
              light: colorTokens.accent[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Share Tech Mono", "monospace"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Share Tech Mono", "monospace"].join(","),
        fontSize: 40,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
      h2: {
        fontFamily: ["Share Tech Mono", "monospace"].join(","),
        fontSize: 32,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
      h3: {
        fontFamily: ["Share Tech Mono", "monospace"].join(","),
        fontSize: 24,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
      h4: {
        fontFamily: ["Share Tech Mono", "monospace"].join(","),
        fontSize: 20,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
      h5: {
        fontFamily: ["Share Tech Mono", "monospace"].join(","),
        fontSize: 16,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
      h6: {
        fontFamily: ["Share Tech Mono", "monospace"].join(","),
        fontSize: 14,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: "bold",
            borderRadius: "0",
            border: "1px solid",
            "&:hover": {
              boxShadow: "0 0 10px currentColor",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: colorTokens.primary[500],
              },
              "&:hover fieldset": {
                borderColor: colorTokens.primary[300],
              },
              "&.Mui-focused fieldset": {
                borderColor: colorTokens.primary[500],
                boxShadow: `0 0 10px ${colorTokens.primary[500]}`,
              },
            },
          },
        },
      },
    },
  };
};
