import React, { useContext } from 'react';
import styled from 'styled-components';

import mainContext from '../../context/mainContext';

import Header from '../molecules/Header';
import LanguageDropdown from '../molecules/LanguageDropdown';
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
    const { state } = useContext(mainContext);

    return (
        <Container>
            {state.dropdownMenu && <LanguageDropdown />}
            <Header />
            <Nav />
            <Socials />
        </Container>
    );
};

export default LeftSide;