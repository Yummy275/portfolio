import React from 'react';
import styled, { keyframes } from 'styled-components';
import waveGradientVertical from '../images/wavesGradientVertical.svg';
import waveGradient from '../images/wavesGradient.svg';
import { InvertCircle } from './Circle';
import { breakpoints } from '../util/breakpoints';
import { FadeIn } from './FadeAnimations';
import { colors } from '../util/colors';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: flex-end;
    background-color: ${colors.black};

    img {
        width: 100%;
        animation: ${FadeIn} 0.6s 0.7s ease forwards;
        opacity: 0;
    }

    img.waves {
        display: none;
        @media (min-width: ${breakpoints.lg}) {
            display: block;
        }
    }
    img.waves-vertical {
        @media (min-width: ${breakpoints.lg}) {
            display: none;
        }
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

const PositionedInvertCircle = styled(InvertCircle)`
    position: absolute;
    bottom: 0;
    margin-bottom: 32px;
    margin-left: 10vw;
    animation: ${Float} 2s ease infinite, ${FadeIn} 0.5s 0.4s linear forwards;
    opacity: 0;
    z-index: 10 !important;
    @media (min-width: ${breakpoints.lg}) {
        margin-left: 20vw;
    }
`;

const InvertBallWave = () => {
    return (
        <Container>
            <img className="waves" src={waveGradient} alt="gradient-waves" />
            <img
                className="waves-vertical"
                src={waveGradientVertical}
                alt="gradient-waves"
            />
            <PositionedInvertCircle
                className="invert-circle"
                size="200px"
                sizemd="300px"
                sizelg="400px"
            />
        </Container>
    );
};

export default InvertBallWave;
