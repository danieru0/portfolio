import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: blue;
    position: absolute;
    opacity: 0;
    transform: translateY(-60px);
    transition: opacity .3s, transform .3s;

    ${({active}) => active && css`
        opacity: 1;
        transform: translateY(0px);
    `}
`

const Projects = ({active}) => {
    return (
        <Container active={active}>
            2
        </Container>
    );
};

export default Projects;