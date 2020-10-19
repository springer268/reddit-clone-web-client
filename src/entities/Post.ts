import { gql } from '@apollo/client'
import { apolloClient } from './../gql/apolloClient'
import { Community, User } from '../entities'

export class Post {
	id: string
	title: string
	content: string
	upvotes: number
	downvotes: number
	communityName: Community['name']
	authorName: User['name']

	public static async fetchByID(id: Post['id']): Promise<Post | null> {
		try {
			interface GQLResponse {
				GetPostByID: {
					author: {
						name: string
					}
					community: {
						name: string
					}
					content: string
					downvotes: number
					id: string
					title: string
					upvotes: number
				}
			}

			const {
				data: { GetPostByID }
			} = await apolloClient.query<GQLResponse>({
				query: gql`
					{
						GetPostByID(id: "${id}") {
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
			})

			const {
				author: { name: authorName },
				community: { name: communityName },
				content,
				downvotes,
				id: id2,
				title,
				upvotes
			} = GetPostByID

			return GetPostByID
				? new Post({ authorName, content, downvotes, id: id2, title, upvotes, communityName })
				: null
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
		this.authorName = partial?.authorName ?? 'noone'
		this.communityName = partial?.communityName ?? 'nowhere'
		this.upvotes = partial?.upvotes ?? 5
		this.downvotes = partial?.downvotes ?? 2
	}
}
