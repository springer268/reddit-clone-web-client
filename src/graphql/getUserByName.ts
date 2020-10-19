import { gql } from '@apollo/client'

export const getUserByName = gql`
	query GetUserByName($name: String!) {
		GetUserByName(name: $name) {
			name
			email
			description
		}
	}
`
