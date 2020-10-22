import { getSelfQuery } from './../util/queries'
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context'
import { ShallowUser } from '../models'

export const useSelf = () => {
	const [self, setSelf] = useState<ShallowUser | null | undefined>()
	const { self: cachedSelf, setSelf: setCachedSelf } = useContext(UserContext)

	useEffect(() => {
		const main = async () => {
			if (cachedSelf !== undefined) {
				setSelf(cachedSelf)
			} else {
				const { data } = await getSelfQuery({ yeah: '' })

				const res = data.GetSelf as ShallowUser

				setSelf(res)
				setCachedSelf(res)
			}
		}

		main()
	}, [])

	return self
}
