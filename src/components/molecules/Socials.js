import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';

import withHover from '../../hoc/withHover';
import useHover from '../../hooks/useHover';
import mainContext from '../../context/mainContext';

import SocialButton from '../atoms/SocialButton';
import LanguageButton from '../atoms/LanguageButton';

const LanguageButtonWithHover = withHover(LanguageButton);
const SocialButtonWithHover = withHover(SocialButton);

const Container = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 450px;
    margin-top: auto;

    @media (max-height: 900px) {
        margin-top: 25px;
    }
`
const Item = styled.li``

const Socials = () => {
    const { state, dispatch } = useContext(mainContext);
    const { handleMouseEnter, handleMouseLeave } = useHover(`transform: scale(1.5) translate(-50%, -50%);`);

    const handleLanguageButtonClick = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        dispatch({
            type: 'UPDATE_DROPDOWN_MENU',
            payload: true
        })
        dispatch({
            type: 'UPDATE_DROPDOWN_MENU_BOTTOM',
            payload: rect.bottom - rect.top,
        })
    }

    return useMemo(() => {
        return (
            <Container>
                <Item>
                    <LanguageButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} text={state.language} onClick={handleLanguageButtonClick}/>
                </Item>
                <Item>
                    <SocialButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} text="Facebook" link="https://www.facebook.com/daniel.daniru0" iconName={['fab', 'facebook-square']} />
                </Item>
                <Item>
                    <SocialButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} text="Github" link="https://github.com/elosiktv" iconName={['fab', 'github']} />
                </Item>
            </Container>
        );
    }, [state.language, handleMouseLeave, handleMouseEnter]); //eslint-disable-line

};

export default Socials;