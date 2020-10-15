import React, { useContext } from 'react';
import styled from 'styled-components';

import t from '../../helpers/t';

import mainContext from '../../context/mainContext';

import NavButton from '../atoms/NavButton';

const Container = styled.nav`
    margin-top: 60px;

    @media (max-height: 840px) {
        margin-top: 30px;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Item = styled.li``

const Nav = () => {
    const { state, dispatch } = useContext(mainContext);

    const handleClick = value => {
        dispatch({
            type: 'UPDATE_ACTIVE',
            payload: value
        })
    }

    const handleKeyDown = (e, value) => {
        if (e.key === 'Enter') {
            handleClick(value);
        }
    }

    return (
        <Container>
            <List>
                <Item><NavButton onKeyDown={(e) => handleKeyDown(e, 0)} onClick={() => handleClick(0)} active={state.active === 0} number="01" text={t('nav.skills')} /></Item>
                <Item><NavButton onKeyDown={(e) => handleKeyDown(e, 1)} onClick={() => handleClick(1)} active={state.active === 1} number="02" text={t('nav.projects')} /></Item>
                <Item><NavButton onKeyDown={(e) => handleKeyDown(e, 2)} onClick={() => handleClick(2)} active={state.active === 2} number="03" text={t('nav.contact')} /></Item>
            </List>
        </Container>
    );
};

export default Nav;