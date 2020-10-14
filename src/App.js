import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import NavContext from './context/NavContext';

import LeftSide from './components/organisms/LeftSide';
import RightSide from './components/organisms/RightSide';

library.add(faFacebookSquare, faGithub, faExternalLinkAlt);

const Container = styled.div`
	width: 100%;
	background: ${({theme}) => theme.colors.bgprimary};
`

const Content = styled.div`
	max-width: 1920px;
	margin: auto;
    min-height: 100vh;
    display: flex;
	justify-content: space-between;
	align-items: stretch;
    padding: 100px 150px;

	@media (max-width: 1610px) {
        padding: 100px 50px;
    }
`

function App() {
	const { Provider } = NavContext;
	const [active, setActive] = useState(2);
	const [prevActive, setPrevActive] = useState(1);

	const updateActive = value => {
		setPrevActive(active);
        setActive(value);
    }

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider value={{active: active, prevActive: prevActive, updateActive: updateActive}}>
					<Container>
						<Content>
							<LeftSide />
							<RightSide />
						</Content>
					</Container>
				</Provider>
			</ThemeProvider>

		</>
	);
}

export default App;
