import * as styled from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = styled.createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    cursor: pointer;
  }
`;
