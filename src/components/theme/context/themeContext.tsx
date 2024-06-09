import * as React from 'react';
import { ThemeType } from './ThemeProvider';

export type ThemeContextType = {
  // theme: ThemeType;
  // setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  state: { theme: ThemeType; themeList: ThemeType[] };
  dispatch: React.Dispatch<any>;
};

export const initialState = {
  theme: {
    name: 'default',
    palette: {
      primary: {
        '50': '#e3f2fd',
        '100': '#bbdefb',
        '200': '#90caf9',
        '300': '#64b5f6',
        '400': '#42a5f5',
        '500': '#2196f3',
        '600': '#1e88e5',
        '700': '#1976d2',
        '800': '#1565c0',
        '900': '#0d47a1',
        main: '#2196f3',
        light: '#bbdefb',
        dark: '#1976d2',
        contrastText: '#fff'
      },
      secondary: {
        '50': '#f3e5f5',
        '100': '#e1bee7',
        '200': '#ce93d8',
        '300': '#ba68c8',
        '400': '#ab47bc',
        '500': '#9c27b0',
        '600': '#8e24aa',
        '700': '#7b1fa2',
        '800': '#6a1b9a',
        '900': '#4a148c',
        main: '#9c27b0',
        light: '#ce93d8',
        dark: '#7b1fa2',
        contrastText: '#fff'
      }
    }
  },
  themeList: [
    {
      name: 'default',
      palette: {
        primary: {
          '50': '#e3f2fd',
          '100': '#bbdefb',
          '200': '#90caf9',
          '300': '#64b5f6',
          '400': '#42a5f5',
          '500': '#2196f3',
          '600': '#1e88e5',
          '700': '#1976d2',
          '800': '#1565c0',
          '900': '#0d47a1',
          main: '#2196f3',
          light: '#bbdefb',
          dark: '#1976d2',
          contrastText: '#fff'
        },
        secondary: {
          '50': '#f3e5f5',
          '100': '#e1bee7',
          '200': '#ce93d8',
          '300': '#ba68c8',
          '400': '#ab47bc',
          '500': '#9c27b0',
          '600': '#8e24aa',
          '700': '#7b1fa2',
          '800': '#6a1b9a',
          '900': '#4a148c',
          main: '#9c27b0',
          light: '#ce93d8',
          dark: '#7b1fa2',
          contrastText: '#fff'
        }
      }
    },
    {
      name: 'dark',
      palette: {
        primary: {
          '50': '#fcfcfc',
          '100': '#dadada',
          '200': '#a0a0a0',
          '300': '#696969',
          '400': '#4d4d4d',
          '500': '#333333',
          '600': '#2e2e2e',
          '700': '#282828',
          '800': '#232323',
          '900': '#191919',
          main: '#333333',
          light: '#dadada',
          dark: '#282828',
          contrastText: '#fff'
        },
        secondary: {
          '50': '#f3e5f5',
          '100': '#e1bee7',
          '200': '#ce93d8',
          '300': '#ba68c8',
          '400': '#ab47bc',
          '500': '#9c27b0',
          '600': '#8e24aa',
          '700': '#7b1fa2',
          '800': '#6a1b9a',
          '900': '#4a148c',
          main: '#9c27b0',
          light: '#ce93d8',
          dark: '#7b1fa2',
          contrastText: '#fff'
        }
      }
    },
    {
      name: 'green',
      palette: {
        primary: {
          '50': '#e8f5e9',
          '100': '#c8e6c9',
          '200': '#a5d6a7',
          '300': '#81c784',
          '400': '#66bb6a',
          '500': '#4caf50',
          '600': '#43a047',
          '700': '#388e3c',
          '800': '#2e7d32',
          '900': '#1b5e20',
          main: '#4caf50',
          light: '#c8e6c9',
          dark: '#388e3c',
          contrastText: '#fff'
        },
        secondary: {
          '50': '#e8f5e9',
          '100': '#c8e6c9',
          '200': '#a5d6a7',
          '300': '#81c784',
          '400': '#66bb6a',
          '500': '#4caf50',
          '600': '#43a047',
          '700': '#388e3c',
          '800': '#2e7d32',
          '900': '#1b5e20',
          main: '#4caf50',
          light: '#c8e6c9',
          dark: '#388e3c',
          contrastText: '#fff'
        }
      }
    }
  ]
};

export const ThemeContext = React.createContext<ThemeContextType | null>({
  state: initialState,
  dispatch: () => null
});
