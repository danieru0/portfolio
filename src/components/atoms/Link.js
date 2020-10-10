import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const A = styled.a`
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
`

const Link = ({href, children}) => {
    return (
        <A href={href}>
            {children}
        </A>
    );
};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Link;