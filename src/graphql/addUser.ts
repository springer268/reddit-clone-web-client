import { gql } from '@apollo/client'

export const addUser = gql`
	mutation AddUser($name: String!, $password: String!) {
		AddUser(name: $name, password: $password) {
			name
		}
	}
`
