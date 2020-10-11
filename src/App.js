import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';

import LeftSide from './components/organisms/LeftSide';
import RightSide from './components/organisms/RightSide';

const Container = styled.div`
	width: 100%;
    height: 100vh;
    display: flex;
    background: ${({theme}) => theme.colors.bgprimary};
    padding: 100px 150px;
`

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Container>
					<LeftSide />
            		<RightSide />
				</Container>
			</ThemeProvider>

		</>
	);
}

export default App;
