import React, { useContext, useReducer } from 'react';
import { ThemeContext, ThemeContextType, initialState } from './themeContext';

export type ThemeType = {
  name: string;
  palette: {
    primary: {
      '50': string;
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      '50': string;
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  };
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload
      };
    case 'ADD_THEME':
      return {
        ...state,
        themeList: [...state.themeList, action.payload]
      };
    default:
      return state;
  }
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
