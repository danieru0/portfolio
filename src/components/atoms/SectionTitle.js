import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const H2 = styled.h2`
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: 26px;
    letter-spacing: 2px;
    user-select: none;
    text-transform: uppercase;
    margin-bottom: 20px;
    display: none;

    @media (max-width: 1190px) {
        display: block;
    }
`

const SectionTitle = ({children}) => {
    return (
        <H2>
            {children}
        </H2>
    );
};

SectionTitle.propTypes = {
    children: PropTypes.string.isRequired
}

export default SectionTitle;