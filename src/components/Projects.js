import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';
import { Title } from './Text';
import BouncyHoverLetters from './BouncyHoverLetters';

const Container = styled.div`
    .projects-content {
        margin-top: 100px;
    }

    .projects-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        flex-wrap: wrap;
        padding: 10px;
    }
`;

const Projects = () => {
    return (
        <Container className="info-block">
            <div className="projects-content">
                <Title>
                    <h2>
                        <BouncyHoverLetters word="Projects" />
                    </h2>
                </Title>
                <div className="projects-container">
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
                    <ProjectCard
                        title="Duis sunt velit laborum ut minim commodo ea sunt."
                        description={
                            'Aliqua incididunt eu adipisicing enim reprehenderit do irure eu tempor occaecat. Ea Lorem sint eiusmod ullamco officia aliqua pariatur occaecat occaecat adipisicing irure. Exercitation in fugiat officia duis minim dolore ut ullamco. '
                        }
                    />
                    <ProjectCard
                        title="Great Corn"
                        description={
                            'Nulla officia enim et nulla. Dolor ea exercitation reprehenderit reprehenderit magna anim id exercitation reprehenderit nisi aliquip ex. '
                        }
                    />
                </div>
            </div>
        </Container>
    );
};

export default Projects;
