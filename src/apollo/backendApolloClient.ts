import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

const link = createHttpLink({
	uri: 'http://localhost:4000/graphql',
	credentials: 'include'
})

export const backendApolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	/*
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore'
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all'
		}
	},
	*/
	link
})
