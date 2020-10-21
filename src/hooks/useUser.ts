import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context'
import { User } from '../models'

export const useUser = () => {
	const [user, setUser] = useState<User | null | undefined>()
	const [loading, setLoading] = useState<boolean>(true)
	const { user: cachedUser, setUser: setCachedUser } = useContext(UserContext)

	useEffect(() => {
		const main = async () => {
			if (cachedUser !== undefined) {
				setUser(cachedUser)
			} else {
				const res = await User.getSelf()
				setUser(res)
				setCachedUser(res)
			}
			setLoading(false)
		}

		main()
	}, [])

	return { user, loading }
}
