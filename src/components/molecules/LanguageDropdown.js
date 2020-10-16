import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import i18n from 'i18next';

import t from '../../helpers/t';

import mainContext from '../../context/mainContext';;

const Container = styled.ul`
    width: 100px;
    height: 100px;
    background-color: ${({theme}) => theme.colors.bgsecondary};
    position: absolute;
    bottom: ${({bottom}) => `${bottom + 10}px`};
    list-style: none;
    display: flex;
    flex-direction: column;
`

const Item = styled.li`
    flex: 1;
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    outline: none;

    &:hover,
    &:focus {
        background-color: ${({theme}) => theme.colors.bgsecondaryhover};
    }
`

const LanguageDropDown = () => {
    const { state, dispatch } = useContext(mainContext);

    useEffect(() => {
        const handleOutsideClick = e => {
            dispatch({
                type: 'UPDATE_DROPDOWN_MENU',
                payload: false
            })
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [dispatch])

    const handleLangChange = lang => {
        i18n.changeLanguage(lang);
        dispatch({
            type: 'UPDATE_LANG',
            payload: lang.toUpperCase()
        })
    }

    return (
        <Container bottom={state.dropdownMenuBottom}>
            <Item>
                <Button onClick={() => handleLangChange('pl')}>{t('languages')['polish']}</Button>
            </Item>
            <Item>
                <Button onClick={() => handleLangChange('en')}>{t('languages')['english']}</Button>
            </Item>
            <Item>
                <Button onClick={() => handleLangChange('jp')}>{t('languages')['japanese']}</Button>
            </Item>
        </Container>
    );
};

export default LanguageDropDown;