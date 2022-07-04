import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 26rem;
    padding: 1.5rem;
`;

export const ProjectCard = ({ title, description }) => {
    return (
        <Container>
            <h3>{title}</h3>
            <p>{description}</p>
        </Container>
    );
};
