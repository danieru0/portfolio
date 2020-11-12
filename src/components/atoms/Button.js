import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    color: ${({theme}) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.bgsecondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    border: 1px solid black;
    font-size: 18px;
    text-transform: uppercase;
    width: 100px;
    height: 40px;
    cursor: none;
    outline: none;

    &:focus,
    &:hover {
        background-color: ${({theme}) => theme.colors.bgsecondaryhover};
    }

    @media (max-width: 1190px) {
        cursor: pointer;
    }
`

const Button = ({children, type, ...props}) => {
    return (
        <StyledButton {...props} type={type}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default Button;