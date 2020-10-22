import { User as IUser } from '../generated'
import { TotalPost } from '.'

export interface ShallowUser extends Omit<IUser, 'posts'> {}

export interface CompleteUser extends ShallowUser {
	posts: TotalPost[]
}
