import React from 'react';
import styled from 'styled-components';
import bodyshot from '../images/longshot.jpg';
import headshot from '../images/headshot.jpg';
import TechInfo from './TechInfo';
import { breakpoints } from '../util/breakpoints';

const bio = [
    "I'm a self taught developer looking to work on web projects. With a passion for elegant design and clean maintainable code, I hope to help push you towards your goals. ",
    "Whether you're looking for a new website, an update, or looking for your next dedicated web developer; I'm ready to help!",
];

const Container = styled.div`
    margin-top: 10rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 2rem;
    padding: 1rem;
    flex-direction: column-reverse;

    p {
        font-size: 1.7rem;
    }

    img {
        border-radius: 10px;
    }

    img.bodyshot {
        display: none;
        @media (min-width: ${breakpoints.lg}) {
            display: block;
            width: 14rem;
            height: auto;
        }
    }

    img.headshot {
        width: 14rem;
        margin: 0 auto;
        @media (min-width: ${breakpoints.lg}) {
            display: none;
        }
    }

    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
    }

    .bio-info {
        h1 {
            margin: 2rem 0;
        }

        .bio-text {
            margin-left: 2rem;

            & > :first-child {
                margin-bottom: 1rem;
            }
        }
    }
`;

const AboutMe = () => {
    return (
        <Container className="info-block">
            <div className="bio-info">
                <h1>Who am I?</h1>
                <div className="bio-text">
                    <p>{bio[0]}</p>
                    <p>{bio[1]}</p>
                </div>
                <h1>Tech</h1>
                <TechInfo />
            </div>
            <img className="bodyshot" src={bodyshot} alt="me" />
            <img className="headshot" src={headshot} alt="me" />
        </Container>
    );
};

export default AboutMe;
