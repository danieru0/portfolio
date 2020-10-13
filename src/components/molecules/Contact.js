import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-60px);
    transition: opacity .3s, transform .3s;

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

const Contact = ({active, index, prevIndex}) => {
    return (
        <Container active={active} index={index} prevIndex={prevIndex}>
            
        </Container>
    );
};

Contact.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    prevActive: PropTypes.number.isRequired
}

export default Contact;