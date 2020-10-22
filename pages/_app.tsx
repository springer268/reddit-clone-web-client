import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { createGlobalStyle } from 'styled-components'
import { SelfContextProvider } from '../src/context'
import { backendApolloClient } from '../src/apollo'
import { theme } from '../src/components/ui/theme'

const GlobalStyles = createGlobalStyle`
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
	}
`

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={backendApolloClient}>
			<SelfContextProvider>
				<Head>
					<title>Reddit</title>
				</Head>
				<GlobalStyles />
				<Component {...pageProps} />
			</SelfContextProvider>
		</ApolloProvider>
	)
}
