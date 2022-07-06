import React from 'react';
import styled from 'styled-components';
import bodyshot from '../images/longshot.jpg';
import headshot from '../images/headshot.jpg';
import TechInfo from './TechInfo';
import { breakpoints } from '../util/breakpoints';
import { Title } from './Text';

const bio = [
    "I'm a self taught developer looking to work on web projects. With a passion for elegant design and clean maintainable code, I hope to help push you towards your goals. ",
    "Whether you're looking for a new website, an update, or looking for your next dedicated web developer; I'm ready to help!",
];

const Container = styled.div`
    margin-top: 250px;
    display: flex;
    align-items: flex-start;
    gap: 16px;
    flex-direction: column-reverse;

    .bio-info {
        .bio-text {
            padding: 10px;
            margin-bottom: 100px;

            & > :first-child {
                margin-bottom: 16px;
            }
        }
    }

    img {
        border-radius: 10px;
    }

    @media (min-width: ${breakpoints.md}) {
        flex-direction: row;
    }

    .portrait {
        padding: 10px;
        width: fit-content;
        margin: 0 auto;

        img.bodyshot {
            display: none;
            @media (min-width: ${breakpoints.md}) {
                display: block;
                width: 220px;
                height: auto;
            }
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }

        img.headshot {
            width: 200px;
            @media (min-width: ${breakpoints.md}) {
                display: none;
            }
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
                rgba(0, 0, 0, 0.12) 0px -12px 30px,
                rgba(0, 0, 0, 0.12) 0px 4px 6px,
                rgba(0, 0, 0, 0.17) 0px 12px 13px,
                rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }
`;

const AboutMe = () => {
    return (
        <Container className="info-block">
            <div className="bio-info">
                <Title>
                    <h2>Who am I?</h2>
                </Title>
                <div className="bio-text">
                    <p>{bio[0]}</p>
                    <p>{bio[1]}</p>
                </div>
                <Title>
                    <h2>Tech</h2>
                </Title>
                <TechInfo />
            </div>
            <div className="portrait">
                <img className="bodyshot" src={bodyshot} alt="me" />
                <img className="headshot" src={headshot} alt="me" />
            </div>
        </Container>
    );
};

export default AboutMe;
