import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Title from '../atoms/Title';
import Description from '../atoms/Description'

const StyledDescription = styled(Description)`
    margin-top: 20px;
`

const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <Title>{t('header')}</Title>
            <StyledDescription>
                {t('description')}
            </StyledDescription>
        </>
    );
};

export default Header;