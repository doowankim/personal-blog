import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  button, input, textarea {
    outline: none;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    font-family: 'Nanum Gothic', sans-serif;
  }
`;

export default globalStyles;
