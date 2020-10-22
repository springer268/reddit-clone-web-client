import { useEffect } from 'react'
import { useContext } from 'react'
import { SelfContext } from 'context'
import { ShallowUser } from 'models'

export const useSelf = (selfData?: ShallowUser | null) => {
	const self = useContext(SelfContext)
	useEffect(() => {
		selfData !== undefined && self.setSelf(selfData)
	}, [])
	return self
}
