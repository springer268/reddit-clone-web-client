import { gql } from '@apollo/client'

export const getCommunityByName = gql`
	query GetCommunityByName($name: String!) {
		GetCommunityByName(name: $name) {
			id
			name
			followerCount
		}
	}
`
