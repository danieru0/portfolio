import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';

import Main from './components/organisms/Main';

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>

		</>
	);
}

export default App;
