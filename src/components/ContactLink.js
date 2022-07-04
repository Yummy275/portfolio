import React from 'react';
import styled from 'styled-components';

const ContactLinkImg = styled.img`
    width: 5rem;
    height: 5rem;
`;

export const ContactLink = ({ target, icon }) => {
    return (
        <a target="_blank" href={target} rel="noreferrer">
            <ContactLinkImg src={icon} />
        </a>
    );
};
