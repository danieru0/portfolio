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
`

const Skill = ({children, size, onMouseMove, onMouseOut}) => {
    return (
        <Span size={size} onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
            {children}
        </Span>
    );
};

Skill.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}

export default Skill;