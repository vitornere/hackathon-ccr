import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    color: #212353;
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Cairo', sans-serif;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
