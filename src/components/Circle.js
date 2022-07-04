import styled, { keyframes } from 'styled-components';
import { colors } from '../util/colors';

export const Circle = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: 8px solid ${colors.lightBlue};
    transition: all 0.3s ease-out;
`;

const MorphingBlob = keyframes`
    0% { border-radius: 50%}
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 

`;

export const MorphingCircle = styled(Circle)`
    animation: ${MorphingBlob} 20s linear infinite alternate;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    z-index: -1;
`;

export const InvertBgCircle = styled(Circle)`
    backdrop-filter: invert(1);
    border: none;
`;
