import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const H1 = styled.h1`
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: 70px;
    letter-spacing: 1px;
    line-height: 80px;
    user-select: none;
    white-space: pre-line;

    @media (max-width: 1410px) {
        font-size: 50px;
        line-height: 50px;
    }

    @media (max-width: 1190px) {
        text-align: center;
    }

    @media (max-width: 820px) {
        text-align: left;
    }
`

const Title = ({children}) => {
    return (
        <H1>
            {children}
        </H1>
    );
};

Title.propTypes = {
    children: PropTypes.string.isRequired
}

export default Title;