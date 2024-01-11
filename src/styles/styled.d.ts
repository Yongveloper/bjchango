import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      orange: string;
      grey: string;
      button: {
        disabled: string;
      };
    };
    device: {
      mobile: string;
    };
  }
}
