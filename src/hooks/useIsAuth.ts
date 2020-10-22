import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ShallowUser } from 'models/User'

export const useIsAuth = (self: ShallowUser | null) => {
	const router = useRouter()
	useEffect(() => {
		if (!self && document.cookie.length === 0) {
			router.push('/login')
		}
	}, [router])
}
