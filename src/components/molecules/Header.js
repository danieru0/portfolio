import React from 'react';
import styled from 'styled-components';

import t from '../../helpers/t';

import Title from '../atoms/Title';
import Description from '../atoms/Description'

const StyledDescription = styled(Description)`
    margin-top: 20px;
`

const Header = () => {
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