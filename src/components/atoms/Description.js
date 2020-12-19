import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const P = styled.p`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.secondary};
    user-select: none;
    font-size: 16px;

    @media (max-width: 1190px) {
        width: 90%;
        text-align: center;
    }

    @media (max-width: 820px) {
        width: 100%;
        text-align: left;
    }

    @media (max-width: 540px) {
        text-align: center;
    }
`

const Description = ({children, className}) => {
    return (
        <P className={className}>
            {children}
        </P>
    );
};

Description.propTypes = {
    children: PropTypes.string.isRequired
}

export default Description;