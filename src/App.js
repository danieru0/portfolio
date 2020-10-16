import React, { useEffect, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLanguage, faGlobe } from '@fortawesome/free-solid-svg-icons';
import i18n from 'i18next';

import mainContext, { initalState } from './context/mainContext';
import mainReducer from './reducer/mainReducer';

import LeftSide from './components/organisms/LeftSide';
import RightSide from './components/organisms/RightSide';

library.add(faFacebookSquare, faGithub, faExternalLinkAlt, faLanguage, faGlobe);

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
	const { Provider } = mainContext;
	const [state, dispatch] = useReducer(mainReducer, initalState);

	useEffect(() => {
		dispatch({
			type: 'UPDATE_LANG',
			payload: i18n.language.toUpperCase()
		})
	}, [])

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider value={{state, dispatch}}>
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
