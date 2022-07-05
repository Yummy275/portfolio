import styled, { keyframes } from 'styled-components';
import { colors } from '../util/colors';
import { breakpoints } from '../util/breakpoints';

export const Circle = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: 8px solid ${colors.blue}e8;
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
    0% { border-radius: 53% 36% 64% 65% / 55% 41% 67% 46% }
20% { border-radius: 33% 35% 50% 60% / 38% 58% 66% 45% }
40% { border-radius: 60% 67% 31% 60% / 57% 55% 37% 58% }
60% { border-radius: 69% 52% 68% 53% / 64% 57% 44% 44% }
80% { border-radius: 67% 36% 32% 39% / 34% 38% 54% 69% }
100% { border-radius: 56% 36% 37% 64% / 61% 45% 45% 35% }
`;

const MorphingBlobVar = keyframes`
0% { border-radius: 64% 59% 57% 48% / 45% 49% 63% 45% }
20% { border-radius: 46% 55% 48% 32% / 54% 41% 52% 67% }
40% { border-radius: 54% 47% 35% 46% / 65% 58% 40% 50% }
60% { border-radius: 61% 59% 56% 42% / 35% 68% 45% 34% }
80% { border-radius: 68% 46% 30% 33% / 33% 62% 55% 61% }
100% { border-radius: 61% 39% 48% 32% / 68% 51% 62% 31% }
   
`;

export const MorphingCircleLg = styled(Circle)`
    animation: ${MorphingBlob} 14s linear infinite alternate;
`;

export const MorphingCircleSm = styled(Circle)`
    animation: ${MorphingBlobVar} 10s linear infinite alternate;
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
