import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: yellow;
    position: absolute;
    opacity: 0;
    transform: translateY(-60px);
    transition: opacity .3s, transform .3s;

    ${({active}) => active && css`
        opacity: 1;
        transform: translateY(0px);
    `}
`

const Skills = ({active}) => {
    return (
        <Container active={active}>
            1
        </Container>
    );
};

export default Skills;