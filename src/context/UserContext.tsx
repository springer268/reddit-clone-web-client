import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { User } from '../models'

interface IUserContext {
	user: User | null | undefined
	setUser: Dispatch<SetStateAction<IUserContext['user']>>
}

export const UserContext = createContext({} as IUserContext)

export const UserContextProvider: FC = ({ children }) => {
	const [user, setUser] = useState<IUserContext['user']>()

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
