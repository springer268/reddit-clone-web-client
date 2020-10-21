import { gql } from '@apollo/client'
import { properties } from './_properties'

export const addUser = gql`
	mutation AddUser($name: String!, $password: String!) {
		AddUser(name: $name, password: $password) {
			${properties.user}
		}
	}
`
