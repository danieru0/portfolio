import React from 'react';
import styled from 'styled-components';

import LeftSide from '../molecules/LeftSide';
import RightSide from '../molecules/RightSide';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${({theme}) => theme.colors.bgprimary};
    padding: 100px 150px;
`

const Main = () => {
    return (
        <Container>
            <LeftSide />
            <RightSide />
        </Container>
    );
};

export default Main;