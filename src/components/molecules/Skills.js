import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Skill from '../atoms/Skill';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
    transition: opacity .3s, transform .3s, visibility .3s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({active, index, prevIndex}) => active || (
        index > prevIndex ? (
            css`
                opacity: 0;
                visibility: hidden;
                transform: translateY(60px);
            `
        ) : (
            css`
                opacity: 0;
                visibility: hidden;
                transform: translateY(-60px);
            `
        )
    )}

    @media (max-width: 1160px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
    }
`

const Skills = ({active, index, prevIndex}) => {
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
        <Container active={active} index={index} prevIndex={prevIndex}>
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
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={34}>socket.io</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={34}>mongodb</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={21}>multer</Skill>
            <Skill onMouseMove={handleMove} onMouseOut={handleMoveOut} size={21}>ffmpeg</Skill>
        </Container>
    );
};

Skills.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    prevIndex: PropTypes.number.isRequired
}

export default Skills;