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
    transition: transform 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
