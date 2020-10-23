import { NextPageContext } from 'next'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { DocumentNode } from 'graphql'
import { backendApolloClient } from 'apollo'
import { GetSelfQuery, GetSelfQueryVariables, GetSelfDocument } from 'gen'
import { ShallowUser } from 'models'
import { createHttpLink } from '@apollo/react-hooks'

const queryBuilder = <T, U, V>(document: DocumentNode) => {
	return async (variables: U, ctx?: NextPageContext): Promise<V> => {
		const cookies = ctx?.req?.headers.cookie

		const client = !cookies
			? backendApolloClient
			: new ApolloClient({
					cache: new InMemoryCache(),
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
					link: createHttpLink({
						uri: 'http://localhost:4000/graphql',
						credentials: 'include',
						headers: { cookie: cookies }
					})
			  })

		const { data } = await client.query<T, typeof variables>({
			query: document,
			variables
		})

		return Object.values(data)[0] as V
	}
}

export const getSelfQuery = queryBuilder<GetSelfQuery, GetSelfQueryVariables, ShallowUser | null>(GetSelfDocument)
