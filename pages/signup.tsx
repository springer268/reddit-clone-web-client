import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout, SignupCard } from 'components'
import Router from 'next/router'
import { useSelf } from 'hooks'

interface InitialProps {}

const SignupPage: NextPage<InitialProps> = ({}) => {
	useSelf()

	useEffect(() => {
		if (document.cookie.length > 0) {
			Router.push('/')
		}
	}, [])

	return (
		<Layout>
			<div style={{ marginTop: '25px' }}>
				<SignupCard />
			</div>
		</Layout>
	)
}

// SignupPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {}

export default SignupPage
