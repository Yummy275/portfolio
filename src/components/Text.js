import styled from 'styled-components';
import { colors } from '../util/colors';

export const Title = styled.div`
    margin-bottom: 32px;
    background-color: ${colors.white};
    padding: 8px 12px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    & > * {
        color: ${colors.blue};
        font-style: italic;
    }
`;

export const GradientText = styled.div`
    background-image: linear-gradient(
        to right bottom,
        #4ac8c8,
        #3991a4,
        #365c72,
        #272e3b,
        #020202
    );
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
`;
