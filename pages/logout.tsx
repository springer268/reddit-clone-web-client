import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'
import Router from 'next/router'

interface InitialProps {}

const LogoutPage: NextPage<InitialProps> = () => {
	useEffect(() => {
		if (document.cookie.length > 0) {
			document.cookie.split(';').forEach(function (c) {
				document.cookie = c
					.replace(/^ +/, '')
					.replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/')
			})
			Router.reload()
		}
	}, [])

	return (
		<Layout>
			<Wrapper>
				<Header>Successfully logged out</Header>
			</Wrapper>
		</Layout>
	)
}

export default LogoutPage
