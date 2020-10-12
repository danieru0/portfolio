import React from 'react';
import styled, { css } from 'styled-components';

import Skill from '../atoms/Skill';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-60px);
    transition: opacity .3s, transform .3s;
    display: flex;
    flex-direction: column;

    ${({active}) => active && css`
        opacity: 1;
        transform: translateY(0px);
        visibility: visible;
    `}
`

const Skills = ({active}) => {
    return (
        <Container active={active}>
            <Skill size={92}>html</Skill>
            <Skill size={92}>javascript</Skill>
            <Skill size={92}>css</Skill>
            <Skill size={92}>react</Skill>
            <Skill size={56}>redux</Skill>
            <Skill size={56}>styled-components</Skill>
            <Skill size={56}>typescript</Skill>
            <Skill size={56}>node.js</Skill>
            <Skill size={56}>firebase</Skill>
            <Skill size={34}>graphql</Skill>
            <Skill size={34}>mongodb</Skill>
            <Skill size={21}>multer</Skill>
            <Skill size={21}>ffmpeg</Skill>
        </Container>
    );
};

export default Skills;