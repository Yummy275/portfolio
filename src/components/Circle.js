import styled, { keyframes } from 'styled-components';
import { colors } from '../util/colors';
import { breakpoints } from '../util/breakpoints';
import { FadeIn } from './FadeAnimations';

export const Circle = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: 8px solid ${colors.white}6e;
    transition: all 0.3s ease-out;
    pointer-events: none;

    @media (min-width: ${breakpoints.md}) {
        width: ${(props) => props.sizemd};
        height: ${(props) => props.sizemd};
    }
    @media (min-width: ${breakpoints.lg}) {
        width: ${(props) => props.sizelg};
        height: ${(props) => props.sizelg};
    }
    @media (min-width: ${breakpoints.xl}) {
        width: ${(props) => props.sizexl};
        height: ${(props) => props.sizexl};
    }
`;

const Float = keyframes`
  from {
    transform: rotate(0deg) translate3d(10px, 0, 0) rotate(0deg);
  }

  to {
    transform: rotate(360deg) translate3d(10px, 0, 0) rotate(-360deg);
  }
`;

export const InvertCircle = styled(Circle)`
    backdrop-filter: invert(1);
    animation: ${Float} 2s ease infinite, ${FadeIn} 0.5s 0.5s linear forwards;
    opacity: 0;
    border: none;
    z-index: 10 !important;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
