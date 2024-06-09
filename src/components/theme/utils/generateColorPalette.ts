import pSBC from './pSBC';

interface ThemePrimaryColors {
  primary: string;
  secondary: string;
}

export const generateColorPalette = (colors: ThemePrimaryColors) => {
  return {
    primary: {
      50: pSBC(0.8, colors.primary, false, true),
      100: pSBC(0.4, colors.primary, false, true),
      200: pSBC(0.3, colors.primary, false, true),
      300: pSBC(0.2, colors.primary, false, true),
      400: pSBC(0.1, colors.primary, false, true),
      500: pSBC(0, colors.primary, false, true),
      600: pSBC(-0.1, colors.primary, false, true),
      700: pSBC(-0.2, colors.primary, false, true),
      800: pSBC(-0.3, colors.primary, false, true),
      900: pSBC(-0.4, colors.primary, false, true),
      main: pSBC(0, colors.primary, false, true),
      light: pSBC(0.4, colors.primary, false, true),
      dark: pSBC(-0.4, colors.primary, false, true),
      contrastText: '#fff'
    },
    secondary: {
      50: pSBC(0.8, colors.secondary, false, true),
      100: pSBC(0.4, colors.secondary, false, true),
      200: pSBC(0.3, colors.secondary, false, true),
      300: pSBC(0.2, colors.secondary, false, true),
      400: pSBC(0.1, colors.secondary, false, true),
      500: pSBC(0, colors.secondary, false, true),
      600: pSBC(-0.1, colors.secondary, false, true),
      700: pSBC(-0.2, colors.secondary, false, true),
      800: pSBC(-0.3, colors.secondary, false, true),
      900: pSBC(-0.4, colors.secondary, false, true),
      main: pSBC(0, colors.secondary, false, true),
      light: pSBC(0.4, colors.secondary, false, true),
      dark: pSBC(-0.4, colors.secondary, false, true),
      contrastText: '#fff'
    }
  };
};
