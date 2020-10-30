import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyles, SelfGetter } from 'utility'
import { SelfContextProvider } from 'context'
import { backendApolloClient } from 'apollo'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={backendApolloClient}>
			<SelfContextProvider>
				<Head>
					<title>Reddit</title>
				</Head>
				<GlobalStyles />
				<SelfGetter />
				<Component {...pageProps} />
			</SelfContextProvider>
		</ApolloProvider>
	)
}

export default App
