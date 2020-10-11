import React, { useState } from 'react';
import styled from 'styled-components';

import NavContext from '../../context/NavContext';

import Header from '../molecules/Header';
import Nav from '../molecules/Nav';
import Socials from '../molecules/Socials';

const Container = styled.div`
    width: 40%;
    height: 100%;
    position: relative;
`

const LeftSide = () => {
    const { Provider } = NavContext;
    const [active, setActive] = useState(0);

    const updateActive = value => {
        setActive(value);
    }

    return (
        <Container>
            <Provider value={{active: active, updateActive: updateActive}}>
                <Header />
                <Nav />
                <Socials />
            </Provider>
        </Container>
    );
};

export default LeftSide;