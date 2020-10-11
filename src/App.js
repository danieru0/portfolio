import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import LeftSide from './components/organisms/LeftSide';
import RightSide from './components/organisms/RightSide';

library.add(faFacebookSquare, faGithub, faExternalLinkAlt);

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
