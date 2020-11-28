import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

const Container = styled.button`
    display: flex;
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    align-items: center;
    background: none;
    border: none;
    font-size: 16px;
    cursor: none;
    user-select: none;

    @media (max-width: 1190px) {
        cursor: pointer;
	}
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
`

const Text = styled.span`
    letter-spacing: 1px;
    margin-left: 10px;
`

const LanguageButton = ({text, onClick, ...props}) => {
    return (
        <Container {...props} onClick={onClick}>
            <StyledIcon icon="globe" />
            <Text>{text}</Text>
        </Container>
    );
};

LanguageButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default LanguageButton;