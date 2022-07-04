import React from 'react';
import styled from 'styled-components';
import TechIcon from './TechIcon';
import { techInfo } from '../util/techInfo';

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    .tech-icon-container {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 10px;
        max-width: 600px;
    }
`;

const TechInfo = () => {
    const icons = (function () {
        const iconArr = [];
        Object.values(techInfo).forEach((tech) =>
            iconArr.push(
                <TechIcon key={tech.name} title={tech.name} icon={tech.icon} />
            )
        );
        return iconArr;
    })();

    return (
        <Container>
            <div className="tech-icon-container">{icons}</div>
        </Container>
    );
};

export default TechInfo;
