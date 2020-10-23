import { User as IUser } from 'gen'
import { TotalPost } from '.'

export interface ShallowUser extends Omit<IUser, 'posts'> {}

export interface CompleteUser extends ShallowUser {
	posts: TotalPost[]
}
