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

    @media (max-width: 1190px) {
        margin-top: 15px;
    }

    @media (max-width: 520px) {
        width: 100%;
    }

    @media (max-width: 440px) {
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`
const Item = styled.li`
    @media (max-width: 440px) {
        margin: 0px 15px;
    }
`

const Socials = () => {
    const { state, dispatch } = useContext(mainContext);
    const { handleMouseEnter, handleMouseLeave } = useHover(`transform: scale(1.5) translate(-50%, -50%)`);

    const handleLanguageButtonClick = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const parentRect = e.currentTarget.parentElement.parentElement.parentElement.getBoundingClientRect();

        dispatch({
            type: 'UPDATE_DROPDOWN_MENU',
            payload: true
        })
        dispatch({
            type: 'UPDATE_DROPDOWN_MENU_BOTTOM',
            payload: {
                bottom: parentRect.bottom - rect.bottom + 30,
                left: e.currentTarget.offsetLeft - 20
            }
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