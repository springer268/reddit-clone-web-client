import { gql } from '@apollo/client'

export const attemptLogin = gql`
	mutation AttemptLogin($name: String!, $password: String!) {
		AttemptLogin(name: $name, password: $password) {
			id
			name
			email
			description
		}
	}
`
