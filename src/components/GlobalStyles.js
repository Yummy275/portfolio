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
  } 

  .info-block {
    padding: 1rem;

    @media(min-width: ${breakpoints.md}) {
          margin-left: 20vw;
    }
    @media(min-width: ${breakpoints.xl}) {
          margin-left: 40vw;
    }
  }
`;
