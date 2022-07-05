import { createGlobalStyle } from 'styled-components';
import { colors } from '../util/colors';
import { breakpoints } from '../util/breakpoints';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: 'Lato', sans-serif;
      color: ${colors.white};
  }
  
  html {
    background-color: ${colors.black};
    font-size: 130%;
  } 

  .info-block {
    max-width: 1000px;
    @media(min-width: ${breakpoints.md}) {
          margin-left: 20vw;
    }
    @media(min-width: ${breakpoints.xl}) {
          margin-left: 35vw;
    }
  }
`;
