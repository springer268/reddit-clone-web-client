import { backendApolloClient } from '../apollo'
import { getCommunityByName, addPost, getPostsFromCommunityByID } from '../graphql'
import {
	Community as ICommunity,
	GetCommunityByNameQuery,
	GetCommunityByNameQueryVariables,
	AddPostMutation,
	AddPostMutationVariables,
	GetPostsFromCommunityByIdQuery,
	GetPostsFromCommunityByIdQueryVariables
} from '../generated'
import { User, Post } from '../models'

export interface Community extends ICommunity {}
export class Community {
	public static fetchByName = async (name: Community['name']): Promise<Community | null> => {
		try {
			const { data } = await backendApolloClient.query<GetCommunityByNameQuery, GetCommunityByNameQueryVariables>(
				{
					query: getCommunityByName,
					variables: { name }
				}
			)

			return data.GetCommunityByName ? new Community(data.GetCommunityByName) : null
		} catch (error) {
			throw error
		}
	}

	static async addPost(
		title: Post['title'],
		content: Post['content'],
		authorID: User['id'],
		communityID: Community['id']
	): Promise<void> {
		try {
			await backendApolloClient.mutate<AddPostMutation, AddPostMutationVariables>({
				mutation: addPost,
				variables: { title, content, authorID, communityID }
			})
		} catch (error) {
			throw error
		}
	}

	static async getPostsByID(communityID: Community['id']): Promise<Post[] | null> {
		try {
			const { data } = await backendApolloClient.query<
				GetPostsFromCommunityByIdQuery,
				GetPostsFromCommunityByIdQueryVariables
			>({
				query: getPostsFromCommunityByID,
				variables: { communityID }
			})

			return data?.GetPostsFromCommunityByID
				? data.GetPostsFromCommunityByID.map(post => new Post(post as Post))
				: null
		} catch (error) {
			throw error
		}
	}

	public constructor(partial?: Partial<Community>) {
		this.name = partial?.name ?? 'testCommunity'
		this.id = partial?.id ?? '1'
		this.followerCount = partial?.followerCount ?? 0
	}
}
