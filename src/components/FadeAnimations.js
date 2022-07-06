import { keyframes } from 'styled-components';

export const FadeShiftIn = (startX, startY) => keyframes`
    from {
        opacity: 0;
        transform: translate(${startX}, ${startY});
    }
    to {
        opacity: 1;
        transform: translate: (0);
    }
`;

export const FadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const FadeScaleIn = keyframes`
    from {
        transform: scale(.1) rotate(360deg);
        opacity: 0;
    }
    to {
        transform: scale(1) rotate(0);
        opacity: 1;
    }
`;

export default FadeShiftIn;
