import { createGlobalStyle } from 'styled-components';
import { colors } from '../util/colors';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: 'Lato', sans-serif;
      color: ${colors.white};
  }
  
  html {
    background-color: ${colors.black};
  }

`;
