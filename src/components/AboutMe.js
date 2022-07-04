import React from 'react';
import styled from 'styled-components';
import bodyshot from '../images/longshot.jpg';
import TechInfo from './TechInfo';

const bio = [
    "I'm a self taught developer looking to work on web projects. With a passion for elegant design and clean maintainable code, I hope to help push you towards your goals. ",
    "Whether you're looking for a new website, an update, or looking for your next dedicated web developer; I'm ready to help!",
];

const Container = styled.div`
    margin-top: 10rem;

    p {
        font-size: 1.7rem;
    }

    .bodyshot {
        width: 16rem;
    }

    .bio {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;

        .bio-info {
            width: 40rem;

            h1 {
                margin: 1.5rem 0;
            }

            .bio-text {
                margin-left: 2rem;

                & > :first-child {
                    margin-bottom: 1rem;
                }
            }
        }
    }
`;

const AboutMe = () => {
    return (
        <Container className="info-block">
            <div className="bio">
                <div className="bio-info">
                    <h1>Who am I?</h1>
                    <div className="bio-text">
                        <p>{bio[0]}</p>
                        <p>{bio[1]}</p>
                    </div>
                    <h1>Tools</h1>
                    <TechInfo />
                </div>
                <img className="bodyshot" src={bodyshot} alt="me" />
            </div>
        </Container>
    );
};

export default AboutMe;
