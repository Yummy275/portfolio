import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';

const Container = styled.div`
    margin-top: 10rem;
`;

const Projects = () => {
    return (
        <Container>
            <h1>Projects</h1>
            <ProjectCard
                title="The Tester"
                description={
                    'Labore laborum qui cupidatat eu proident cupidatat volupta.'
                }
            />
            <ProjectCard
                title="Blooming"
                description={
                    'Culpa dolor esse voluptate aliqua. Adipisicing non exercitation fugiat minim. Amet nostrud fugiat eiusmod est anim nisi amet eiusmod nostrud exercitation. Ipsum in ex nostrud enim deserunt aliquip dolore non sunt mollit nulla exercitation. Consectetur veniam laborum ad aliquip Lorem nulla aute. Velit non nostrud officia ad reprehenderit mollit nostrud voluptate ex irure aliquip cupidatat culpa do.'
                }
            />
        </Container>
    );
};

export default Projects;
