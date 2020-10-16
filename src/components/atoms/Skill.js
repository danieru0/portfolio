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