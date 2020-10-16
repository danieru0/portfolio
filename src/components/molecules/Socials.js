import React, { useContext } from 'react';
import styled from 'styled-components';

import mainContext from '../../context/mainContext';

import SocialButton from '../atoms/SocialButton';
import LanguageButton from '../atoms/LanguageButton';

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

    return (
        <Container>
            <Item>
                <LanguageButton text={state.language} onClick={handleLanguageButtonClick}/>
            </Item>
            <Item>
                <SocialButton text="Facebook" link="https://www.facebook.com/daniel.daniru0" iconName={['fab', 'facebook-square']} />
            </Item>
            <Item>
                <SocialButton text="Github" link="https://github.com/elosiktv" iconName={['fab', 'github']} />
            </Item>
        </Container>
    );
};

export default Socials;