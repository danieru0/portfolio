import React, { useEffect, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faLanguage, faGlobe } from '@fortawesome/free-solid-svg-icons';
import i18n from 'i18next';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import mainContext, { initalState } from './context/mainContext';
import mainReducer from './reducer/mainReducer';
import cursorContext, { initalCursorState } from './context/cursorContext';
import cursorReducer from './reducer/cursorReducer';

import LeftSide from './components/organisms/LeftSide';
import RightSide from './components/organisms/RightSide';
import Cursor from './components/molecules/Cursor';

library.add(faFacebookSquare, faGithub, faExternalLinkAlt, faLanguage, faGlobe);

const Container = styled.div`
	width: 100%;
	background: ${({theme}) => theme.colors.bgprimary};
	cursor: none;
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
	const [state, dispatch] = useReducer(mainReducer, initalState);
	const [cursorState, dispatchCursor] = useReducer(cursorReducer, initalCursorState);

	useEffect(() => {
		const cursor = document.querySelector('.cursor');

		dispatch({
			type: 'UPDATE_LANG',
			payload: i18n.language.toUpperCase()
		})

		document.addEventListener('mousemove', e => {
			cursor.style.left = `${e.pageX}px`;
			cursor.style.top = `${e.pageY}px`;
		})
	}, [])

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<mainContext.Provider value={{state, dispatch}}>
					<cursorContext.Provider value={{cursorState, dispatchCursor}}>
						<Container>
							<Cursor />
							<Content>
								<LeftSide />
								<RightSide />
								<NotificationContainer />
							</Content>
						</Container>
					</cursorContext.Provider>
				</mainContext.Provider>
			</ThemeProvider>

		</>
	);
}

export default App;
