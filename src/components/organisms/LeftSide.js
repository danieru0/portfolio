import React, { useContext, useMemo } from 'react';
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

    @media (max-width: 1190px) {
        width: 100%;
        align-items: center;
	}

    @media (max-width: 820px) {
        align-items: flex-start;
    }
`

const LeftSide = () => {
    const { state } = useContext(mainContext);

    return useMemo(() => {
        return (
            <Container>
                {state.dropdownMenu && <LanguageDropdown />}
                <Header />
                <Nav />
                <Socials />
            </Container>
        );
    }, [state])

};

export default LeftSide;