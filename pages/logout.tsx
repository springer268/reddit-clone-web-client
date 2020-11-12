import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout } from 'components'
import { Header } from 'ui'
import { useSelf } from 'hooks'

const LogoutPage: NextPage = () => {
	useSelf(null)

	useEffect(() => {
		if (document.cookie.length > 0) {
			document.cookie.split(';').forEach(c => {
				document.cookie = c
					.replace(/^ +/, '')
					.replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
			})
		}
	}, [])

	return (
		<Layout>
			<Header>Successfully logged out</Header>
		</Layout>
	)
}

export default LogoutPage
