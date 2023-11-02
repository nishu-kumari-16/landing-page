import React from "react";
import { blue, yellow } from "@mui/material/colors";
import { createTheme, Theme, PaletteOptions } from "@mui/material/styles";
import colorPalette from "../helpers/color-palette";

export enum SupportedThemes {
  LIGHT = "light",
  DARK = "dark",
}

export interface ITypographyVariants {
  subtitle3: React.CSSProperties;
  subtitle4: React.CSSProperties;
  subtitle5: React.CSSProperties;
  subtitle6: React.CSSProperties;
}

interface ExtendedPaletteOptions extends PaletteOptions {
  baseColors: {
    [color: string]: string;
  };
}

declare module "@mui/material/styles" {
  interface Theme {
    extendedPalette: ExtendedPaletteOptions;
  }
  interface ThemeOptions {
    extendedPalette?: ExtendedPaletteOptions;
  }

  // added custom typography variant
  interface TypographyVariants extends ITypographyVariants {}

  interface TypographyVariantsOptions extends ITypographyVariants {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    subtitle6: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "grayed-outlined": true;
  }
}

export const lightTheme: Theme = createTheme({
  palette: {
    mode: SupportedThemes.LIGHT,
    primary: {
      main: colorPalette.primary,
    },
    secondary: {
      main: colorPalette.secondary,
    },
    text: {
      primary: colorPalette.textPrimary,
      secondary: colorPalette.textSecondary,
      disabled: colorPalette.textDisabled,
    },
    success: {
      main: colorPalette.successPrimary,
    },
    error: {
      main: colorPalette.errorPrimary,
    },
    warning: {
      light: colorPalette.warningSecondary,
      main: colorPalette.warningPrimary,
    },
  },
  extendedPalette: {
    baseColors: {
      offWhite: colorPalette.offWhite,
      mutedGray: colorPalette.mutedGray,
      gray: colorPalette.gray,
      mistGray: colorPalette.mistGray,
      frost: colorPalette.frost,
      charcoalGray: colorPalette.charcoalGray,
      slateBlueGray: colorPalette.slateBlueGray,
      cyanBlue: colorPalette.cyanBlue,
      aquaHaze: colorPalette.aquaHaze,
      flashWhite: colorPalette.flashWhite,
      white: colorPalette.white,
      dawnPink: colorPalette.dawnPink,
      cloudyGray: colorPalette.cloudyGray,
      hanBlue: colorPalette.hanBlue,
      solitudeGray: colorPalette.solitudeGray,
      lightGray: colorPalette.lightGray,
    },
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    //Paragraph(s) Regular
    body1: {
      fontSize: "1rem",
      lineHeight: "1.3125rem",
      fontWeight: 400,
    },

    //Paragraph(s) Bold
    body2: {
      fontSize: "1rem",
      lineHeight: "1.3125rem",
      fontWeight: 500,
    },

    //Paragraph(xs) Regular
    subtitle1: {
      fontSize: "0.875rem",
      lineHeight: "1.3125rem",
      fontWeight: 400,
    },

    //Paragraph(xs) bold
    subtitle2: {
      fontSize: "0.875rem",
      lineHeight: "1.3125rem",
      fontWeight: 500,
    },

    subtitle3: {
      fontSize: "0.75rem",
      color: colorPalette.charcoalGray,
      fontWeight: 400,
      lineHeight: "0.9rem",
    },
    subtitle4: {
      fontSize: "0.75rem",
      color: colorPalette.black,
      fontWeight: 600,
      lineHeight: "0.9rem",
    },
    subtitle5: {
      fontSize: "0.75rem",
    },
    subtitle6: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "2.4rem",
      color: colorPalette.black,
    },
    h2: {
      fontSize: "1.8125rem",
      fontWeight: 500,
      lineHeight: "2.175rem",
      color: colorPalette.black,
    },
    h3: {
      fontSize: "1.625rem",
      fontWeight: 500,
      lineHeight: "1.95rem",
      color: colorPalette.black,
    },
    h4: {
      fontSize: "1.4375rem",
      fontWeight: 500,
      lineHeight: "1.725rem",
      color: colorPalette.black,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
      color: colorPalette.black,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: "1.35rem",
      color: colorPalette.black,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: colorPalette.textPrimary,
          },
        },
        standard: {
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: "1.2rem",
          color: colorPalette.textPrimary,
        },
        sizeSmall: {
          fontSize: "0.75rem",
          color: colorPalette.textPrimary,
          transform: "none",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: "1.2rem",
          color: colorPalette.textPrimary,
          transform: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: colorPalette.white,
          border: `0.0625rem solid ${colorPalette.gray}`,
          borderRadius: "0.5rem",
          color: colorPalette.textPrimary,
          fontWeight: 400,
          ".MuiTooltip-tooltipArrow": {
            color: colorPalette.white,
          },
        },
      },
    },
    MuiButtonBase: {},
    MuiRadio: {
      styleOverrides: {
        root: {
          color: colorPalette.textDisabled,
          padding: 0,
          ".MuiSvgIcon-root": {
            height: 15,
            width: 15,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          lineHeight: "1.05rem",
          fontWeight: 500,
          padding: "0.5625rem 1.125rem",
          borderRadius: "0.5rem",
          textTransform: "none",
          boxShadow: "none",
          ":focus": {
            outline: `0.25rem solid ${colorPalette.dawnPink}`,
          },
          ":disabled": {
            boxShadow: "0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)",
            cursor: "not-allowed",
          },
        },
        contained: {
          backgroundColor: `${colorPalette.primary} !important`,
          ":hover": {
            backgroundColor: colorPalette.primary,
            boxShadow: "none",
          },
          ":disabled": {
            background: colorPalette.cavernPink,
            color: colorPalette.white,
          },
        },
        outlined: {
          ":disabled": {
            border: `0.0625rem solid ${colorPalette.lightGray}`,
          },
          ":hover": {
            border: `0.0625rem solid ${colorPalette.primary}`,
          },
        },
        text: {
          ":focus": {
            outline: "none",
          },
        },
        sizeSmall: {
          fontSize: "0.75rem",
          padding: "0.5rem 0.75rem",
          lineHeight: "0.9rem",
        },
        containedSuccess: {
          ":hover": {
            background: colorPalette.successPrimary,
            boxShadow: "none",
          },
          ":disabled": {
            background: colorPalette.successPrimary,
            color: colorPalette.white,
            opacity: 0.5,
          },
        },
        containedError: {
          ":hover": {
            background: colorPalette.errorPrimary,
            boxShadow: "none",
          },
        },
        sizeLarge: {
          fontSize: "1.125rem",
          fontWeight: 500,
          lineHeight: "1.75rem",
          padding: "1rem 1.75rem",
          boxShadow: "0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)",
        },
        sizeMedium: {
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: "1rem",
          padding: "0.75rem 1rem",
        },
      },
      variants: [
        {
          props: { variant: "grayed-outlined" },
          style: {
            border: `0.0625rem solid ${colorPalette.mutedGray}`,
            color: colorPalette.charcoalGray,
            background: colorPalette.white,
            ":hover": {
              background: colorPalette.white,
              boxShadow: "0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)",
            },
            ":focus": {
              outline: "none",
              border: `0.0625rem solid ${colorPalette.mutedGray}`,
            },
          },
        },
      ],
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: "1rem",
          borderRadius: "0.5rem",
          border: "none",
          height: "3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: "1.25rem",
          ".MuiAlert-message": {
            padding: 0,
          },
          ".MuiIconButton-root": {
            "&:hover": {
              backgroundColor: "inherit",
            },
          },
        },
        standardSuccess: {
          color: colorPalette.successPrimary,
          border: `0.0625rem solid ${colorPalette.successPrimary}`,
          backgroundColor: colorPalette.successSecondary,
        },
        standardError: {
          color: colorPalette.errorPrimary,
          border: `0.0625rem solid ${colorPalette.errorPrimary}`,
          backgroundColor: colorPalette.errorSecondary,
        },
        standardWarning: {
          color: colorPalette.warningPrimary,
          border: `0.0625rem solid ${colorPalette.warningPrimary}`,
          backgroundColor: colorPalette.warningSecondary,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "2.5rem",
          boxSizing: "border-box",
          border: `0.0625rem solid ${colorPalette.lightGray}`,
          padding: "0.625rem 1rem",
          borderRadius: "0.5rem",
          lineHeight: "1.2rem",
          color: colorPalette.textPrimary,
          "&.Mui-focused": {
            border: `0.125rem solid ${colorPalette.textSecondary}`,
          },
          "&.Mui-disabled": {
            backgroundColor: colorPalette.gray,
            border: `0.0625rem solid ${colorPalette.gray}`,
          },
          "&.Mui-error": {
            border: `0.125rem solid ${colorPalette.errorPrimary}`,
          },
          fieldset: {
            border: "none",
          },
        },
        input: {
          padding: "0 0 0 0.625rem",
          height: "auto",
          color: colorPalette.textPrimary,
          "&::placeholder": {
            color: colorPalette.textDisabled,
          },
        },

        sizeSmall: {
          padding: "0.5rem 0.75rem",
          height: "2rem",
          fontSize: "0.75rem",
          lineHeight: "0.9rem",
          "&.Mui-focused": {
            border: `0.0625rem solid ${colorPalette.textSecondary}`,
          },
          "&.Mui-error": {
            border: `0.0625rem solid ${colorPalette.errorPrimary}`,
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: "0.5rem",
          border: `0.0625rem solid ${colorPalette.mutedGray}`,
          boxShadow: "none",
          "::-webkit-scrollbar": {
            width: "0.25rem",
            height: "0.25rem",
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colorPalette.aquaHaze,
          color: colorPalette.charcoalGray,
          fontWeight: 500,
          textTransform: "capitalize",
          position: "sticky",
          top: 0,
          zIndex: 5,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          ":nth-of-type(even)": {
            backgroundColor: `${colorPalette.frost}`,
          },
          "&.search-row": {
            "&:nth-of-type(odd)": {
              background: colorPalette.frost,
            },

            "&:nth-of-type(1)": {
              background: colorPalette.white,
            },

            "&:nth-of-type(even)": {
              background: colorPalette.white,
            },
          },
          borderBottom: `0.0625rem solid ${colorPalette.mutedGray}`,

          "&:last-child": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          borderBottom: "none",
        },
        head: {
          padding: "0.75rem 1rem",
          whiteSpace: "nowrap",
          color: colorPalette.charcoalGray,
        },
        body: {
          padding: "1rem",
          fontWeight: 400,
          color: colorPalette.textPrimary,
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          borderTop: `0.0625rem solid ${colorPalette.mutedGray}`,
          position: "sticky",
          backgroundColor: colorPalette.aquaHaze,
          bottom: 0,
          zIndex: 5,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h6",
          subtitle2: "h6",
          body1: "p",
          body2: "p",
          inherit: "p",
          subtitle3: "p",
          subtitle4: "p",
        },
      },
    },
    MuiCheckbox: {
      variants: [
        {
          props: {
            size: "small",
          },
          style: {
            ".MuiSvgIcon-root": {
              height: 15,
              width: 15,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            height: 18,
            width: 18,
          },
        },
        colorPrimary: {
          color: colorPalette.textDisabled,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "&:hover": {
            backgroundColor: "inherit",
          },
          "&.Mui-selected": {
            backgroundColor: colorPalette.aquaHaze,
            fontWeight: 500,

            "&:hover": {
              backgroundColor: colorPalette.aquaHaze,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: 0,
          ":first-of-type": {
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          },
          borderRadius: "0.5rem",
          "&.Mui-expanded": {
            margin: 0,
          },
          border: `0.0625rem solid ${colorPalette.mutedGray}`,
          ".MuiTableContainer-root": {
            border: "none",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0.75rem 1.5rem",
        },
        content: {
          margin: 0,
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

const darkTheme: Theme = createTheme({
  palette: {
    mode: SupportedThemes.DARK,
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  components: {
    MuiButton: {},
  },
});

export const supportThemes: { [name: string]: Theme } = {
  light: lightTheme,
  dark: darkTheme,
};
