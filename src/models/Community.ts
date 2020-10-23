import { Community as ICommunity } from 'gen'

export interface ShallowCommunity extends Omit<ICommunity, 'posts'> {}
