import React from 'react';
import styled from 'styled-components';
import BouncyHoverChar from './BouncyHoverChar';

const Container = styled.div``;

const stringCharSeperator = (string) => {
    const charArr = string.split('');
    const spanWrappedCharsArr = [];

    var keyVal = 1;
    charArr.forEach((char) => {
        const wrappedChar = <BouncyHoverChar key={keyVal} char={char} />;
        spanWrappedCharsArr.push(wrappedChar);
        keyVal += 1;
    });
    return spanWrappedCharsArr;
};

const BouncyHoverLetters = ({ word }) => {
    const charArr = stringCharSeperator(word);
    return <Container>{charArr}</Container>;
};

export default BouncyHoverLetters;
