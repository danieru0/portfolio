import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: ${({theme}) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.bgsecondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    border: 1px solid black;
    font-size: 18px;
    text-transform: uppercase;
    width: 100px;
    height: 40px;
    cursor: pointer;
    outline: none;

    &:focus,
    &:hover {
        background-color: ${({theme}) => theme.colors.bgsecondaryhover};
    }
`

const Button = ({children, type}) => {
    return (
        <StyledButton type={type}>
            {children}
        </StyledButton>
    );
};

export default Button;