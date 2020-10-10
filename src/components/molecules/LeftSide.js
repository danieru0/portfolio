import React from 'react';
import styled from 'styled-components';

import t from '../../helpers/t';

import Header from '../atoms/Header';
import Info from '../atoms/Info';
//import Link from '../atoms/Link';

const Container = styled.div`
    width: 40%;
    height: 100%;
`

const StyledInfo = styled(Info)`
    margin-top: 20px;
`

const LeftSide = () => {
    return (
        <Container>
            <Header>{t('header')}</Header>
            <StyledInfo>
                {t('description')}
            </StyledInfo>
        </Container>
    );
};

export default LeftSide;