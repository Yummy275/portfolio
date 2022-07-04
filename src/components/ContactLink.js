import React from 'react';
import styled from 'styled-components';

const ContactLinkImg = styled.img`
    width: 4.5rem;
    height: 4.5rem;
`;

export const ContactLink = ({ target, icon }) => {
    return (
        <a target="_blank" href={target} rel="noreferrer">
            <ContactLinkImg src={icon} />
        </a>
    );
};
