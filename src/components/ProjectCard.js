import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 26rem;
    padding: 1.5rem;
    .title {
        margin-bottom: 0.5rem;
    }
`;

export const ProjectCard = ({ title, description }) => {
    return (
        <Container>
            <h2 className="title">{title}</h2>
            <p>{description}</p>
        </Container>
    );
};
