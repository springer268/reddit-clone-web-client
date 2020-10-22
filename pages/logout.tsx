import { useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import { Layout } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'
import Router from 'next/router'
import { getSelfQuery } from 'util/queries'
import { ShallowUser } from 'models'

interface InitialProps {
	self: ShallowUser | null
}

const LogoutPage: NextPage<InitialProps> = ({ self }) => {
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
		<Layout self={self}>
			<Header>Successfully logged out</Header>
		</Layout>
	)
}

LogoutPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)
	return { self }
}

export default LogoutPage
