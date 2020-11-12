import { theme } from 'ui'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;

		a {
			color: ${theme.text_primary};
		}
	}

	body {
		background-color: ${theme.bg_primary};
		color: ${theme.text_primary};

		&::-webkit-scrollbar-track {
			box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
			background-color: ${theme.bg_secondary};
		}

		&::-webkit-scrollbar {
			width: 12px;
			background-color: #000;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			background-color: #555;
		}
	}
`
