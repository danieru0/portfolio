import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
    position: relative;
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    margin-bottom: 10px;
`

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 300px;
    background-color: ${({theme}) => theme.colors.bgsecondary};
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    border: 1px solid black;
    outline: none;
    resize: none;
    font-size: 20px;
    cursor: none;
    padding: 0px 10px;
    position: relative;

    &:valid + label,
    &:focus + label {
        top: -21px;
        left: -8px;
        font-size: 16px;
    }

    @media (max-width: 1190px) {
        cursor: text;
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
    bottom: 8px;
    color: red;
    font-size: 12px;
`

const TextArea = ({placeholder, name, value, onChange, error, ...props}) => {
    const { t } = useTranslation();

    return (
        <Container>
            <StyledTextArea {...props} onChange={onChange} value={value} name={name} required/>
            <StyledLabel htmlfor={name}>{placeholder}</StyledLabel>
            <ErrorMessage>{error ? t(`contact.${error}`) : ''}</ErrorMessage>
        </Container>
    );
};

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default TextArea;