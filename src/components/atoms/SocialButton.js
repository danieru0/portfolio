import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

const Container = styled.a`
    display: flex;
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    text-decoration: none;
    align-items: center;
    user-select: none;
    font-size: 16px;
    cursor: none;
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 18px;

    &:nth-of-type(2) {
        font-size: 15px;
        color: ${({theme}) => theme.colors.linkIcon};
    }
`

const Text = styled.span`
    letter-spacing: 1px;
    margin: 0px 10px 0px 20px;
`

const SocialButton = ({text, link, iconName, ...props}) => {
    return (
        <Container {...props} href={link}>
            <StyledIcon icon={iconName} />
            <Text>{text}</Text>
            <StyledIcon icon="external-link-alt" />
        </Container>
    );
};

SocialButton.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    iconName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}

export default SocialButton;