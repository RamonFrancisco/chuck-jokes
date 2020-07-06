import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background: #f1f1f1;
    font-family: 'Inter', sans-serif;
  }

  #root { height: 100%; }
`;

export default GlobalStyles;
