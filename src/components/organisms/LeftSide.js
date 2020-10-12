import React from 'react';
import styled from 'styled-components';

import Header from '../molecules/Header';
import Nav from '../molecules/Nav';
import Socials from '../molecules/Socials';

const Container = styled.div`
    width: 40%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`

const LeftSide = () => {
    return (
        <Container>
            <Header />
            <Nav />
            <Socials />
        </Container>
    );
};

export default LeftSide;