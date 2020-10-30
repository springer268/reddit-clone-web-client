import { CommunityFragment, GetCommunityWithPostsByNameQuery } from 'gql'

export type Community = CommunityFragment
export type CommunityWithPosts = GetCommunityWithPostsByNameQuery['GetCommunityByName']
