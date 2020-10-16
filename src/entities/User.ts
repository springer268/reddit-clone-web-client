import { gql } from '@apollo/client'
import { apolloClient } from '../gql/apolloClient'

export class User {
	name: string
	email: string
	description: string

	public static async fetchByName(name: User['name']): Promise<User | null> {
		try {
			interface GQLResponse {
				GetUserByUsername: User
			}

			interface VariableTypes {
				username: string
			}

			const {
				data: { GetUserByUsername }
			} = await apolloClient.query<GQLResponse, VariableTypes>({
				query: gql`
					{
						GetUserByUsername(username: "${name}") {
							name
							email
							description
						}
					}
				`
			})

			return GetUserByUsername ?? null
		} catch {
			return null
		}
	}

	public constructor(partial?: Partial<User>) {
		this.name = partial?.name ?? 'no_name'
		this.email = partial?.name ?? 'no_email'
		this.description = partial?.name ?? 'no_description'
	}
}
