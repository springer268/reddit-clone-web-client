import { useEffect } from 'react'
import { useContext } from 'react'
import { SelfContext } from 'context'
import { User } from 'models'

export const useSelf = (selfData?: User | null) => {
	const self = useContext(SelfContext)
	useEffect(() => {
		selfData !== undefined && self.setSelf(selfData)
	}, [])
	return self
}
