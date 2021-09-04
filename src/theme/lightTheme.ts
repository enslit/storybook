import {DefaultTheme} from "styled-components";

export const lightTheme: DefaultTheme = {
  name: 'Light',
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
    },
    text: '#333',
  },
  typography: {
    fontSize: '14px'
  },
  borderRadius: '4px',
  spacing: (num: number) => `${num * 8}px`
}