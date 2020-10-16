import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import i18n from 'i18next';

import t from '../../helpers/t';
import withHover from '../../hoc/withHover';
import useHover from '../../hooks/useHover';
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
    cursor: none;
    color: ${({theme}) => theme.colors.secondary};
    font-family: ${({theme}) => theme.fonts.secondary};
    outline: none;

    &:hover,
    &:focus {
        background-color: ${({theme}) => theme.colors.bgsecondaryhover};
    }
`

const ButtonWithHover = withHover(Button);

const LanguageDropDown = () => {
    const { state, dispatch } = useContext(mainContext);
    const { handleMouseEnter, handleMouseLeave } = useHover(`transform: scale(1.5) translate(-50%, -50%);`);

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

            handleMouseLeave();
        }
    }, [dispatch]) //eslint-disable-line

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
                <ButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleLangChange('pl')}>{t('languages')['polish']}</ButtonWithHover>
            </Item>
            <Item>
                <ButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleLangChange('en')}>{t('languages')['english']}</ButtonWithHover>
            </Item>
            <Item>
                <ButtonWithHover onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleLangChange('jp')}>{t('languages')['japanese']}</ButtonWithHover>
            </Item>
        </Container>
    );
};

export default LanguageDropDown;