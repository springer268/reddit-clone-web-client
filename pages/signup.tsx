import { useEffect } from 'react'
import { NextPage } from 'next'
import { Layout, SignupCard } from 'components'
import Router from 'next/router'

const SignupPage: NextPage = () => {
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

export default SignupPage
