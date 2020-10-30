import { PostFragment, GetPostWithCommentsByIdQuery } from 'gql'

export type Post = PostFragment
export type PostWithComments = GetPostWithCommentsByIdQuery['GetPostByID']
