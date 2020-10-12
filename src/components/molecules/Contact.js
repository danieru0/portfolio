import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-60px);
    transition: opacity .3s, transform .3s;

    ${({active}) => active && css`
        opacity: 1;
        transform: translateY(0px);
        visibility: visible;
    `}
`

const Contact = ({active}) => {
    return (
        <Container active={active}>
            
        </Container>
    );
};

export default Contact;