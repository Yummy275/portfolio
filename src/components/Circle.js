import styled, { keyframes } from 'styled-components';
import { colors } from '../util/colors';
import { breakpoints } from '../util/breakpoints';

export const Circle = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: 8px solid ${colors.blue}6e;
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

const MorphingBlobMd = keyframes`
    0% { border-radius: 63% 39% 30% 31% / 79% 50% 32% 45% }
    20% { border-radius: 73% 46% 50% 20% / 36% 23% 57% 35% }
    40% { border-radius: 68% 40% 37% 21% / 28% 39% 47% 38% }
    60% { border-radius: 67% 54% 46% 37% / 76% 68% 56% 54% }
    80% { border-radius: 59% 68% 25% 42% / 27% 38% 34% 59% }
    100% { border-radius: 20% 78% 78% 25% / 31% 62% 63% 26% }

`;

const MorphingBlobSm = keyframes`
    0% { border-radius: 45% 42% 25% 23% / 20% 28% 76% 77% }
    20% { border-radius: 28% 47% 42% 29% / 20% 79% 33% 63% }
    40% { border-radius: 30% 38% 74% 79% / 59% 35% 34% 69% }
    60% { border-radius: 31% 29% 39% 27% / 70% 62% 50% 30% }
    80% { border-radius: 22% 44% 62% 76% / 75% 26% 64% 45% }
    100% { border-radius: 78% 70% 57% 38% / 44% 37% 23% 36% }

`;

const MorphingBlobLg = keyframes`
    0% { border-radius: 71% 51% 69% 25% / 44% 32% 65% 47% }
    20% { border-radius: 30% 50% 40% 45% / 77% 65% 44% 72% }
    40% { border-radius: 20% 43% 33% 29% / 55% 54% 77% 37% }
    60% { border-radius: 45% 35% 34% 66% / 40% 33% 21% 29% }
    80% { border-radius: 72% 69% 31% 33% / 60% 38% 20% 34% }
    100% { border-radius: 20% 21% 50% 63% / 40% 69% 70% 54% }

`;

const MorphingCircleLg = styled(Circle)`
    animation: ${MorphingBlobLg} 18s ease-in-out infinite alternate;
`;
const MorphingCircleMd = styled(Circle)`
    animation: ${MorphingBlobMd} 12s ease-in-out infinite alternate;
`;
const MorphingCircleSm = styled(Circle)`
    animation: ${MorphingBlobSm} 15s ease-in-out infinite alternate;
    background-color: ${colors.blue};
`;

export const MorphingCircles = () => {
    return (
        <>
            <MorphingCircleSm size="12rem" sizemd="16rem" sizelg="22rem" />
            <MorphingCircleMd size="18rem" sizemd="26rem" sizelg="34rem" />
            <MorphingCircleLg size="28rem" sizemd="36rem" sizelg="44rem" />
        </>
    );
};

const Float = keyframes`
  from {
    transform: rotate(0deg) translate3d(10px, 0, 0) rotate(0deg);
  }

  to {
    transform: rotate(360deg) translate3d(10px, 0, 0) rotate(-360deg);
  }
}
`;

export const InvertCircle = styled(Circle)`
    backdrop-filter: invert(1);
    animation: ${Float} 2s ease infinite;
    border: none;
    z-index: 10 !important;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
