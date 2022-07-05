import React from 'react';
import styled from 'styled-components';
import { colors } from '../util/colors';
import { Button } from './Button';

const Container = styled.div`
    width: 324px;
    height: fit-content;
    padding: 24px;
    border-left: 2px solid ${colors.white};
    border-top: 2px solid ${colors.white};
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .title {
        margin-bottom: 8px;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
        gap: 16px;
    }
`;

export const ProjectCard = ({ title, description }) => {
    return (
        <Container>
            <h3 className="title">{title}</h3>
            <p>{description}</p>
            <div className="buttons">
                <Button>Source</Button>
                <Button>Demo</Button>
            </div>
        </Container>
    );
};
