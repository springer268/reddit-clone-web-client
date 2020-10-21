import { gql } from '@apollo/client'

export const getPostsFromCommunityByID = gql`
	query GetPostsFromCommunityByID($communityID: String!) {
		GetPostsFromCommunityByID(communityID: $communityID) {
			id
			title
			content
			upvotes
			downvotes
			author {
				id
				name
				email
				description
			}
			community {
				id
				name
				followerCount
			}
		}
	}
`
