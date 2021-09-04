import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  name: 'Dark',
  palette: {
    primary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
    },
    text: '#fff',
  },
  typography: {
    fontSize: '14px',
    fontFamily: 'Inter',
  },
  borderRadius: '4px',
  spacing: (num: number) => `${num * 8}px`,
};
