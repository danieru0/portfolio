import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Line = styled.span`
    width: ${({active}) => active ? '80px' : '40px'};
    height: 1px;
    background-color: ${({active}) => active ? '#fff' : '#5C5C5C'};
    display: block;
    margin: 0px 15px;
    transition: width .2s ease-in, background-color .2s ease-in;
`

const Container = styled.a`
    font-family: ${({theme}) => theme.fonts.secondary};
    color: ${({active}) => active ? '#fff' : '#5C5C5C'};
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin: 15px 0px;
    transition: color .2s ease-in;

    &:hover {
        color: #fff;
    }

    &:hover ${Line} {
        width: 80px;
        background-color: #fff;
    }

    &:focus {
        outline: none;
        color: #fff;
    }

    &:focus ${Line} {
        width: 80px;
        background-color: #fff;
    }
`

const Number = styled.span`
    font-weight: bold;
`

const Text = styled.span`
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
`

const NavButton = ({number, active, text, onClick, onKeyDown}) => {
    return (
        <Container onKeyDown={onKeyDown} onClick={onClick} tabIndex="0" active={active}>
            <Number>{number}</Number>
            <Line active={active} />
            <Text>{text}</Text>
        </Container>
    );
};

NavButton.propTypes = {
    number: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func
}


export default NavButton;