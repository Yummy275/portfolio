import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FadeScaleIn } from './FadeAnimations';

const Rotate = keyframes`
    0% {
            transform: rotate(0);
  }
    100% {
            transform: rotate(360deg);
  }
`;

const ContactLinkImg = styled.img`
    width: 64px;
    height: 64px;
    opacity: 0;
    animation: ${FadeScaleIn} 0.5s ease-in-out forwards;
    transition: transform 0.3s ease;
    :hover {
        transform: scale(1.1);
    }
`;

export const ContactLink = ({ target, icon }) => {
    return (
        <a target="_blank" href={target} rel="noreferrer">
            <ContactLinkImg src={icon} />
        </a>
    );
};
