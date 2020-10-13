import React, { useContext } from 'react';
import styled from 'styled-components';

import NavContext from '../../context/NavContext';

import Skills from '../molecules/Skills';
import Projects from '../molecules/Projects';
import Contact from '../molecules/Contact';

const Container = styled.div`
    width: 45%;
    position: relative;
`

const RightSide = () => {
    const { active, prevActive } = useContext(NavContext);

    return (
        <Container>
            <Skills active={active === 0} index={active} prevIndex={prevActive} />
            <Projects active={active === 1} index={active} prevIndex={prevActive} />
            <Contact active={active === 2} index={active} prevIndex={prevActive} />
        </Container>
    );
};

export default RightSide;