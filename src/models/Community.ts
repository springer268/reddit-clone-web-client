import { backendApolloClient } from '../apollo'
import { getCommunityByName } from '../graphql'
import { Community as ICommunity, GetCommunityByNameQuery, GetCommunityByNameQueryVariables } from '../generated'

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

	public constructor(partial?: Partial<Community>) {
		this.name = partial?.name ?? 'testCommunity'
		this.id = partial?.id ?? '1'
		this.followerCount = partial?.followerCount ?? 0
	}
}
