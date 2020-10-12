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
    height: 100vh;
    display: flex;
	justify-content: space-between;
    background: ${({theme}) => theme.colors.bgprimary};
    padding: 100px 150px;
`

function App() {
	const { Provider } = NavContext;
	const [active, setActive] = useState(0);

	const updateActive = value => {
        setActive(value);
    }

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider value={{active: active, updateActive: updateActive}}>
					<Container>
						<LeftSide />
						<RightSide />
					</Container>
				</Provider>
			</ThemeProvider>

		</>
	);
}

export default App;
