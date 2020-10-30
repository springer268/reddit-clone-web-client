import { UserFragment, GetUserByNameWithPostsQuery } from 'gql'

export type User = UserFragment
export type UserWithPosts = GetUserByNameWithPostsQuery['GetUserByName']
