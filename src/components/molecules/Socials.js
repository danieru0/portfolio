import React from 'react';
import styled from 'styled-components';

import SocialButton from '../atoms/SocialButton';

const Container = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    position: absolute;
    bottom: 0;
    width: 350px;
`
const Item = styled.li``

const Socials = () => {
    return (
        <Container>
            <Item><SocialButton text="Facebook" link="https://www.facebook.com/daniel.daniru0" iconName={['fab', 'facebook-square']} /></Item>
            <Item><SocialButton text="Github" link="https://github.com/elosiktv" iconName={['fab', 'github']} /></Item>
        </Container>
    );
};

export default Socials;