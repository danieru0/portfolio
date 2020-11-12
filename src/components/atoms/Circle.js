import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #fff;
    transition: top .1s ease-out, left .1s ease-out, transform .1s;
    transform: scale(1) translate(-50%, -50%);
    transform-origin: 0 0;
    pointer-events: none;
    z-index: 99999999;

    ${({cursorStyle}) => `${cursorStyle} !important`};

    @media (max-width: 1190px) {
        display: none;
	}
`

const Circle = ({cursorStyle}) => {
    return (
        <Container cursorStyle={cursorStyle} className="cursor" />
    );
};

Circle.propTypes = {
    cursorStyle: PropTypes.string.isRequired
}

export default Circle;