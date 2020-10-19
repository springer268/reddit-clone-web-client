import { backendApolloClient } from '../apollo'
import { getPostByID } from '../graphql'
import { Post as IPost, GetPostByIdQuery, GetPostByIdQueryVariables } from '../generated'
import { User, Community } from 'models'

export interface Post extends Omit<IPost, 'author' | 'community'> {
	author?: User
	community?: Community
}
export class Post {
	public static async fetchByID(id: Post['id']): Promise<Post | null> {
		try {
			const { data } = await backendApolloClient.query<GetPostByIdQuery, GetPostByIdQueryVariables>({
				query: getPostByID,
				variables: { id }
			})

			return data.GetPostByID ? new Post(data.GetPostByID as Post) : null
		} catch (error) {
			throw error
		}
	}

	karma(): number {
		return this.upvotes - this.downvotes
	}

	public constructor(partial?: Partial<Post>) {
		this.id = partial?.id ?? Math.random().toString()
		this.title = partial?.title ?? 'Unnamed post'
		this.content = partial?.content ?? 'Ive got nothing...'
		this.upvotes = partial?.upvotes ?? 5
		this.downvotes = partial?.downvotes ?? 2
		this.author = partial?.author
		this.community = partial?.community
	}
}
