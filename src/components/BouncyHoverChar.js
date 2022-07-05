import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Bounce = keyframes`
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0px);
    }

`;

const BouncyChar = styled.span`
    display: inline-block;
    white-space: pre-wrap;
    animation: ${(props) =>
        props.hovering
            ? css`
                  ${Bounce} 0.5s ease infinite;
              `
            : ''};
`;

const BouncyHoverChar = ({ char }) => {
    const [hovering, setHovering] = useState(false);

    const fireHoverAnim = () => {
        if (hovering === false) {
            setHovering(true);
            setTimeout(() => {
                setHovering(false);
            }, 500);
        }
    };

    return (
        <BouncyChar hovering={hovering} onMouseEnter={fireHoverAnim}>
            {char}
        </BouncyChar>
    );
};

export default BouncyHoverChar;
