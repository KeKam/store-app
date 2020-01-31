import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    padding: 20px 60px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
