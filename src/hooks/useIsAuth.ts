import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { User } from 'models'

export const useIsAuth = (self: User | null) => {
	const router = useRouter()
	useEffect(() => {
		if (!self && document.cookie.length === 0) {
			router.push('/login')
		}
	}, [router])
}
