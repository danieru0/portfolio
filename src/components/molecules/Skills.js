import React, { useState, useEffect, useMemo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import t from '../../helpers/t';
import useHover from '../../hooks/useHover';
import withHover from '../../hoc/withHover';

import Skill from '../atoms/Skill';
import SectionTitle from '../atoms/SectionTitle';

const SkillWithHover = withHover(Skill);

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

    @media (max-width: 1426px) {
        justify-content: center;
        align-content: center;
    }

    @media (max-width: 1190px) {
        position: relative;
        opacity: 1;
        visibility: visible;
        height: 650px;
        margin-top: 80px;
        justify-content: flex-start;
        align-content: flex-start;
        transform: translateY(0px);
	}

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
`

const Skills = ({active, index, prevIndex}) => {
    const [scale, setScale] = useState(null); 
    const { handleMouseEnter, handleMouseLeave } = useHover(`
        transform: scale(${scale}) translate(-50%, -50%);
        mix-blend-mode: difference;
        background: #fff;
        border: 1px solid #000;
    `);

    useEffect(() => {
        if (scale !== null) {
            handleMouseEnter();
        }
    }, [scale]) //eslint-disable-line

    useEffect(() => {
        if (scale === 0) {
            handleMouseLeave();
        }
    }, [scale]) //eslint-disable-line

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

    const handleEnter = size => {
        setScale(size / 30);
    }

    const handleLeave = () => {
        setScale(0);
    }

    return useMemo(() => {
        return (
            <Container active={active} index={index} prevIndex={prevIndex}>
                <SectionTitle>{t('nav')['skills']}</SectionTitle>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>html</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>javascript</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>css</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={92}>react</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>redux</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>styled-components</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>typescript</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>node.js</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={56}>firebase</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={34}>graphql</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={34}>socket.io</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={34}>mongodb</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={21}>multer</SkillWithHover>
                <SkillWithHover onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMove} onMouseOut={handleMoveOut} size={21}>ffmpeg</SkillWithHover>
            </Container>
        );
    }, [active, index, prevIndex])

};

Skills.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    prevIndex: PropTypes.number.isRequired
}

export default Skills;