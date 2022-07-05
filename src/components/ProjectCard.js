import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/colors';
import { Button } from './Button';

const Container = styled.div`
    width: 26rem;
    height: fit-content;
    padding: 1.5rem;
    border-left: 2px solid ${colors.white};
    border-top: 2px solid ${colors.white};
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;

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
