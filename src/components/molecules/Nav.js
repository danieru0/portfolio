import React, { useContext } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import withHover from '../../hoc/withHover';
import mainContext from '../../context/mainContext';
import useHover from '../../hooks/useHover';

import NavButton from '../atoms/NavButton';

const NavButtonWithHover = withHover(NavButton);

const Container = styled.nav`
    margin-top: 60px;

    @media (max-height: 840px) {
        margin-top: 30px;
    }

    @media (max-width: 1190px) {
        display: none;
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
    const { t } = useTranslation();
    const { state, dispatch } = useContext(mainContext);
    const { handleMouseEnter, handleMouseLeave } = useHover(`transform: scale(1.5) translate(-50%, -50%)`);

    const handleClick = value => {
        dispatch({
            type: 'UPDATE_PREV_ACTIVE',
            payload: state.prevActive
        })
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
                <Item><NavButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onKeyDown={(e) => handleKeyDown(e, 0)} onClick={() => handleClick(0)} active={state.active === 0} number="01" text={t('nav.skills')} /></Item>
                <Item><NavButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onKeyDown={(e) => handleKeyDown(e, 1)} onClick={() => handleClick(1)} active={state.active === 1} number="02" text={t('nav.projects')} /></Item>
                <Item><NavButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onKeyDown={(e) => handleKeyDown(e, 2)} onClick={() => handleClick(2)} active={state.active === 2} number="03" text={t('nav.contact')} /></Item>
            </List>
        </Container>
    );
};

export default Nav;