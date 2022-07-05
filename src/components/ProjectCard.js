import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
    width: 26rem;
    padding: 1.5rem;
    .title {
        margin-bottom: 0.5rem;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;
        gap: 1rem;
    }
`;

export const ProjectCard = ({ title, description }) => {
    return (
        <Container>
            <h2 className="title">{title}</h2>
            <p>{description}</p>
            <div className="buttons">
                <Button>Source</Button>
                <Button>Demo</Button>
            </div>
        </Container>
    );
};
