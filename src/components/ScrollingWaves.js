import React from 'react';
import styled, { keyframes } from 'styled-components';
import hillsBg from '../images/hills.svg';

const scrollAnimation = keyframes`
    from {
        transform: translateX(20%);
    }
    to {
        transform: translateX(-5%);
    }
`;

const Container = styled.div`
    display: flex;
    position: absolute;
    align-items: flex-end;
    width: 200vw;
    z-index: -1;
    animation: ${scrollAnimation} 60s ease-in-out alternate infinite;

    img {
        width: 100%;
    }

    img.flipped-waves {
        transform: scaleX(-1);
    }
`;

export const ScrollingWaves = () => {
    return (
        <Container>
            <img src={hillsBg} alt="waves" />
            <img className="flipped-waves" src={hillsBg} alt="flipped-waves" />
        </Container>
    );
};
