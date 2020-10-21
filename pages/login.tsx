import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout, LoginCard } from '../src/components'
import { Wrapper } from '../src/components/ui'
import Router from 'next/router'

interface InitialProps {}

const LoginPage: NextPage<InitialProps> = () => {
	useEffect(() => {
		if (document.cookie.length > 0) {
			Router.push('/')
		}
	}, [])

	return (
		<Layout>
			<Wrapper>
				<div style={{ marginTop: '25px' }}>
					<LoginCard />
				</div>
			</Wrapper>
		</Layout>
	)
}

export default LoginPage
