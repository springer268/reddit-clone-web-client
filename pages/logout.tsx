import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout } from 'components'
import { Header } from 'components/ui'
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
