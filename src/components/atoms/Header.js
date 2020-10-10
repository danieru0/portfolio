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
`

const Header = ({children}) => {
    return (
        <H1>
            {children}
        </H1>
    );
};

Header.propTypes = {
    children: PropTypes.string.isRequired
}

export default Header;