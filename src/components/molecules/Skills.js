import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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
    align-items: flex-start;

    ${({active}) => active && css`
        opacity: 1;
        transform: translateY(0px);
        visibility: visible;
    `}
`

const Skills = ({active}) => {

    const handleMove = e => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const yRotation = 7 * ((x - rect.width / 2) / rect.width);
        const xRotation = 7 * ((y - rect.height / 2) / rect.height);

        e.target.style.transform = `perspective(400px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    }

    const handleMoveOut = e => {
        e.target.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg)`;
    }

    return (
        <Container active={active}>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>html</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>javascript</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>css</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>react</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>redux</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>styled-components</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>typescript</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>node.js</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>firebase</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={34}>graphql</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={34}>mongodb</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={21}>multer</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={21}>ffmpeg</Skill>
        </Container>
    );
};

Skills.propTypes = {
    active: PropTypes.bool.isRequired
}

export default Skills;