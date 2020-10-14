import React from 'react';
import styled from 'styled-components';

import t from '../../helpers/t';

const Container = styled.div`
    position: relative;
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
`

const StyledInput = styled.input`
    width: 285px;
    height: 50px;
    background-color: ${({theme}) => theme.colors.bgsecondary};
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    border: 1px solid black;
    outline: none;
    font-size: 20px;
    padding: 0px 10px;
    position: relative;

    &:valid + label,
    &:focus + label {
        top: -21px;
        left: -8px;
        font-size: 16px;
    }
`

const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    font-size: 20px;
    padding: 0px 10px;
    top: 10px;
    transition: top .3s, left .3s, font-size .3s;
    z-index: 1;
`

const ErrorMessage = styled.span`
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: red;
    font-size: 12px;
`

const Input = ({placeholder, name, value, onChange, error}) => {
    return (
        <Container>
            <StyledInput onChange={onChange} value={value} name={name} required/>
            <StyledLabel htmlFor={name}>{placeholder}</StyledLabel>
            <ErrorMessage>{t("contact")[error]}</ErrorMessage>
        </Container>
    );
};

export default Input;