import { gql } from '@apollo/client'

export const getUserByNameWithPosts = gql`
	query GetUserByNameWithPosts($name: String!) {
		GetUserByName(name: $name) {
			name
			email
			description
			posts {
				id
				title
				content
				upvotes
				downvotes
				community {
					id
					name
					followerCount
				}
				author {
					name
					id
					email
					description
				}
			}
		}
	}
`
