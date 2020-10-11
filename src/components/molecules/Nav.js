import React, { useContext } from 'react';
import styled from 'styled-components';

import NavContext from '../../context/NavContext';

import NavButton from '../atoms/NavButton';

const Container = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    align-items: flex-start;
`

const Nav = () => {
    const { active, updateActive } = useContext(NavContext);

    const handleClick = value => {
        updateActive(value);
    }

    const handleKeyDown = (e, value) => {
        if (e.key === 'Enter') {
            handleClick(value);
        }
    }

    return (
        <Container>
            <NavButton onKeyDown={(e) => handleKeyDown(e, 0)} onClick={() => handleClick(0)} active={active === 0} number="01" text="Skills" />
            <NavButton onKeyDown={(e) => handleKeyDown(e, 1)} onClick={() => handleClick(1)} active={active === 1} number="02" text="Projects" />
            <NavButton onKeyDown={(e) => handleKeyDown(e, 2)} onClick={() => handleClick(2)} active={active === 2} number="03" text="Contact" />
        </Container>
    );
};

export default Nav;