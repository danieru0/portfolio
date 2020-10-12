import React, { useContext } from 'react';
import styled from 'styled-components';

import NavContext from '../../context/NavContext';

import Skills from '../molecules/Skills';
import Projects from '../molecules/Projects';
import Contact from '../molecules/Contact';

const Container = styled.div`
    width: 45%;
    height: 100%;
    position: relative;
`

const RightSide = () => {
    const { active } = useContext(NavContext);

    return (
        <Container>
            <Skills active={active === 0} />
            <Projects active={active === 1} />
            <Contact active={active === 2} />
        </Container>
    );
};

export default RightSide;