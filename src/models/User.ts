import { backendApolloClient } from '../apollo'
import { getUserByName, getUserByNameWithPosts, addUser, attemptLogin, getSelf } from '../graphql'
import { User as IUser } from '../generated'
import { Post } from '.'

export type CompleteUser = Omit<User, 'posts'> & { posts: Required<Post>[] }

export interface User extends Omit<IUser, 'posts'> {
	posts?: Post[]
}
export class User {
	/**
	 * Fetches a user.
	 *
	 * @param name The name of the User to be fetched.
	 * @param options Optional paremeter to let a user's posts be fetched as well.
	 */
	static async fetchByName(name: User['name']): Promise<User | null>
	static async fetchByName(name: User['name'], options: Partial<{ posts: true }>): Promise<CompleteUser | null>
	static async fetchByName(
		name: User['name'],
		options?: Partial<{ posts: boolean }>
	): Promise<CompleteUser | User | null> {
		try {
			if (!options?.posts) {
				const { data } = await backendApolloClient.query({
					query: getUserByName,
					variables: { name }
				})

				return data.GetUserByName ? new User(data.GetUserByName) : null
			} else {
				const { data } = await backendApolloClient.query({
					query: getUserByNameWithPosts,
					variables: { name }
				})

				return data?.GetUserByName ? (new User(data.GetUserByName as User) as CompleteUser) : null
			}
		} catch (error) {
			throw error
		}
	}

	static async attemptLogin(name: User['name'], password: string): Promise<User | null> {
		try {
			const { data } = await backendApolloClient.mutate({
				mutation: attemptLogin,
				variables: { name, password }
			})

			return data?.AttemptLogin ? new User(data.AttemptLogin) : null
		} catch (error) {
			throw error
		}
	}

	static async createFromNameAndPassword(name: User['name'], password: string): Promise<void> {
		try {
			await backendApolloClient.mutate({
				mutation: addUser,
				variables: { name, password }
			})
		} catch (error) {
			throw error
		}
	}

	static async getSelf(): Promise<User | null> {
		try {
			const { data } = await backendApolloClient.query({
				query: getSelf,
				variables: { yeah: 'yeah' }
			})

			return data?.GetSelf ? new User(data.GetSelf) : null
		} catch (error) {
			throw error
		}
	}

	public constructor(partial?: Partial<User>) {
		this.__typename = partial?.__typename ?? undefined
		this.name = partial?.name ?? 'no_name'
		this.email = partial?.email ?? 'no_email'
		this.description = partial?.description ?? 'no_description'
		this.id = partial?.id ?? '1'
		this.posts = partial?.posts
	}
}
