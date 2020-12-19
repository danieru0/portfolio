import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
    font-family: ${({theme}) => theme.fonts.primary};
    color: rgba(255,255,255,0.1);
    font-size: ${({size}) => `${size}px`};
    text-transform: uppercase;
    line-height: 90%;
    user-select: none;
    transition: color .3s transform .3s;

    &:hover {
        color: rgba(255,255,255,1);
    }

    @media (max-width: 1426px) {
        font-size: 40px;
        margin: 5px;
        line-height: 30px;
    }

    @media (max-width: 1190px) {
        margin: 8px 10px;
    }

    @media (max-height: 840px) {
        font-size: 50px;
    }

    @media (max-width: 820px) {
        margin: 8px 0px;
    }

    @media (max-width: 650px) {
        line-height: 40px;
        margin: 3px 3px;
    }

    @media (max-width: 540px) {
        text-align: center;
    }

    @media (max-width: 420px) {
        font-size: 40px;
    }
`

const Skill = ({children, size, onMouseMove, onMouseOut, onMouseEnter, ...props}) => {
    return (
        <Span onMouseEnter={() => onMouseEnter(size)} {...props} size={size} onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
            {children}
        </Span>
    );
};

Skill.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}

export default Skill;