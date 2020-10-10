import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Header from '../atoms/Header';

const Container = styled.div`
    width: 40%;
    height: 100%;
`

const LeftSide = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Header>{t('header.welcome')}</Header>
        </Container>
    );
};

export default LeftSide;