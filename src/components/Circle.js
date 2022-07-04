import styled from 'styled-components';
import { colors } from '../util/colors';

export const Circle = styled.div`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: 5px solid ${colors.lightBlue};
    transition: all 0.3s ease-out;
`;
