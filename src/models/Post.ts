import { Post as IPost } from 'gen'
import { ShallowUser, ShallowCommunity } from 'models'

export interface ShallowPost extends Omit<IPost, 'author' | 'community'> {}

export interface TotalPost extends ShallowPost {
	author: ShallowUser
	community: ShallowCommunity
}
