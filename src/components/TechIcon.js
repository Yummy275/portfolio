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
        font-size: 1.3rem;
    }
`;

const TechIcon = ({ icon, title }) => {
    return (
        <Container>
            <img src={icon} alt="tech-icon" />
            <h2 className="tech-label">{title}</h2>
        </Container>
    );
};

export default TechIcon;
