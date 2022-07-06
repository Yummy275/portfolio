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
    border-radius: 5px;
    opacity: 0;
    animation: ${FadeScaleIn} 0.5s ease-in-out forwards;
    transition: transform 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ContactLink = ({ target, icon }) => {
    return (
        <a target="_blank" href={target} rel="noreferrer">
            <ContactLinkImg src={icon} />
        </a>
    );
};
