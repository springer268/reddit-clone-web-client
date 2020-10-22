import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { ShallowUser } from '../models'

interface ISelfContext {
	self: ShallowUser | null | undefined
	setSelf: Dispatch<SetStateAction<ISelfContext['self']>>
}

export const UserContext = createContext({} as ISelfContext)

export const UserContextProvider: FC = ({ children }) => {
	const [self, setSelf] = useState<ISelfContext['self']>()

	return <UserContext.Provider value={{ self, setSelf }}>{children}</UserContext.Provider>
}
