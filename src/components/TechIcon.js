import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
    }

    .tech-label {
        margin-top: 10px;
    }
`;

const TechIcon = ({ icon, title }) => {
    return (
        <Container>
            <img src={icon} alt="tech-icon" />
            <h4 className="tech-label">{title}</h4>
        </Container>
    );
};

export default TechIcon;
