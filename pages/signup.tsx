import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout, SignupCard } from '../src/components'
import { Wrapper } from '../src/components/ui'
import Router from 'next/router'

interface InitialProps {}

const SignupPage: NextPage<InitialProps> = () => {
	useEffect(() => {
		if (document.cookie.length > 0) {
			Router.push('/')
		}
	}, [])
	return (
		<Layout>
			<Wrapper>
				<div style={{ marginTop: '25px' }}>
					<SignupCard />
				</div>
			</Wrapper>
		</Layout>
	)
}

export default SignupPage
