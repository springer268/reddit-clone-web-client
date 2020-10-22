import { useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import { Layout } from '../src/components'
import { Header } from '../src/components/ui'
import { getSelfQuery } from 'util/queries'
import { ShallowUser } from 'models'
import { useSelf } from 'hooks'

interface InitialProps {}

const LogoutPage: NextPage<InitialProps> = ({}) => {
	useSelf(null)

	useEffect(() => {
		if (document.cookie.length > 0) {
			document.cookie.split(';').forEach(function (c) {
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

// LogoutPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {}

export default LogoutPage
