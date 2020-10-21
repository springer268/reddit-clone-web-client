import { gql } from '@apollo/client'
import { properties } from './_properties'

export const getSelf = gql`
	query GetSelf($yeah: String!) {
		GetSelf(yeah: $yeah) {
			${properties.completeUser}
		}
	}
`
