import styled from 'styled-components';
import { colors } from '../util/colors';

export const Button = styled.button`
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid ${colors.white};
    padding: 8px;
    font-size: 0.8rem;
    transition: all 0.2s ease;
    color: ${colors.white};

    :hover {
        cursor: pointer;
        color: ${colors.blue};
        background-color: ${colors.white};
    }
`;
