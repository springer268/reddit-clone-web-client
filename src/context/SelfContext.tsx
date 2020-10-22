import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { ShallowUser } from '../models'

interface ISelfContext {
	self: ShallowUser | null
	setSelf: Dispatch<SetStateAction<ISelfContext['self']>>
}

export const SelfContext = createContext({} as ISelfContext)

export const SelfContextProvider: FC = ({ children }) => {
	const [self, setSelf] = useState<ISelfContext['self']>(null)

	return <SelfContext.Provider value={{ self, setSelf }}>{children}</SelfContext.Provider>
}
