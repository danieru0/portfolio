import React from 'react';
import styled from 'styled-components';

import Header from '../molecules/Header';
import Nav from '../molecules/Nav';
import Socials from '../molecules/Socials';

const Container = styled.div`
    width: 40%;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: 1822px) {
        width: 709px;
    }

    @media (max-width: 1410px) {
        width: 50%;
    }
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