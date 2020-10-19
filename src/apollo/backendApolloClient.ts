import { ApolloClient, InMemoryCache } from '@apollo/client'

export const backendApolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'http://localhost:4000'
})
