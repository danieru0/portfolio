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
`

const Skill = ({children, size}) => {
    return (
        <Span size={size}>
            {children}
        </Span>
    );
};

Skill.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}

export default Skill;