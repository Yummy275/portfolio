import { createGlobalStyle } from 'styled-components';
import { colors } from '../util/colors';
import { breakpoints } from '../util/breakpoints';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: 'Lato', sans-serif;
  }
  
  html {
    background-color: ${colors.blue};
    font-size: 130%;      
    color: ${colors.white};
  } 

  .info-block {
    max-width: 900px;
    margin: 0 auto;
    @media(min-width: ${breakpoints.lg}) {
          margin: 0 0 0 20vw;
    }
    @media(min-width: ${breakpoints.xxl}) {
          margin: 0 0 0 35vw;
    }
  }
`;
