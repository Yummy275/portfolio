import styled, { keyframes } from 'styled-components';
import { colors } from '../util/colors';
import { breakpoints } from '../util/breakpoints';

export const Circle = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: 8px solid ${colors.blue};
    transition: all 0.3s ease-out;

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

const MorphingBlob = keyframes`
    0% { border-radius: 31% 40% 64% 44% / 25% 38% 58% 33% }
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 

`;

export const MorphingCircle = styled(Circle)`
    animation: ${MorphingBlob} 16s linear infinite alternate;
`;

const MorphingBlobTwo = keyframes`
    0% { border-radius: 52% 33% 45% 76% / 53% 44% 64% 48% }
  100% { border-radius: 32% 27% 55% 43% / 58% 39% 54% 66%; } 
   20% { border-radius: 28% 67% 44% 33% / 11% 66% 44% 77%; } 
   40% { border-radius: 54% 64% 42% 36% / 64% 75% 44% 23%; } 
   60% { border-radius: 37% 63% 55% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 63% 59%; } 

`;

export const MorphingCircleTwo = styled(Circle)`
    animation: ${MorphingBlobTwo} 11s linear infinite alternate;
`;

export const InvertBgCircle = styled(Circle)`
    backdrop-filter: invert(1);
    border: none;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
