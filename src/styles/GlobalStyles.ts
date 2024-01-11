import * as styled from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyles = styled.createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background: rgba(181, 181, 181, 0.4);
    font-size: 18px;
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
