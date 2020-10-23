import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { createGlobalStyle } from 'styled-components'
import { SelfContextProvider } from 'context'
import { backendApolloClient } from 'apollo'
import { theme } from 'components/ui/theme'
import { useSelf } from 'hooks'
import { useEffect } from 'react'
import { getSelfQuery } from 'gql'

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

const GetSelfComponent: React.FC<{}> = () => {
	const { setSelf } = useSelf()

	useEffect(() => {
		const main = async () => {
			const res = await getSelfQuery({})
			setSelf(res)
		}

		main()
	}, [])

	return <></>
}

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={backendApolloClient}>
			<SelfContextProvider>
				<Head>
					<title>Reddit</title>
				</Head>
				<GlobalStyles />
				<GetSelfComponent />
				<Component {...pageProps} />
			</SelfContextProvider>
		</ApolloProvider>
	)
}

export default App
