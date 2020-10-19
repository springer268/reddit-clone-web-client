import { gql } from '@apollo/client'

export const getPostByID = gql`
	query GetPostByID($id: String!) {
		GetPostByID(id: $id) {
			id
			title
			content
			upvotes
			downvotes
			author {
				name
			}
			community {
				name
			}
		}
	}
`
