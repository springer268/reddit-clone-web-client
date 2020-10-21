import { gql } from '@apollo/client'

export const addPost = gql`
	mutation AddPost($communityID: String!, $authorID: String!, $title: String!, $content: String!) {
		AddPost(communityID: $communityID, authorID: $authorID, title: $title, content: $content) {
			id
		}
	}
`
