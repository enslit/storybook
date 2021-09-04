import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
      };
      text: string;
    };
    typography: {
      fontSize: string;
      fontFamily: string;
    };
    borderRadius: string;
    spacing: (space: num) => string;
  }
}
