import { gql } from '@apollo/client'
import { apolloClient } from '../gql/apolloClient'

export class User {
	id: string
	name: string
	email: string
	description: string

	public static async fetchByName(name: User['name']): Promise<User | null> {
		try {
			interface GQLResponse {
				GetUserByName: User
			}

			const {
				data: { GetUserByName }
			} = await apolloClient.query<GQLResponse>({
				query: gql`
						{
							GetUserByUsername(name: "${name}") {
								name
								email
								description
							}
						}
					`
			})

			return GetUserByName ?? null
		} catch {
			throw new Error('Error contacting server')
		}
	}

	public constructor(partial?: Partial<User>) {
		this.name = partial?.name ?? 'no_name'
		this.email = partial?.name ?? 'no_email'
		this.description = partial?.name ?? 'no_description'
		this.id = partial?.id ?? '1'
	}
}
