import { useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import { Layout, SignupCard } from '../src/components'
import Router from 'next/router'
import { ShallowUser } from 'models'
import { getSelfQuery } from 'util/queries'

interface InitialProps {
	self: ShallowUser | null
}

const SignupPage: NextPage<InitialProps> = ({ self }) => {
	useEffect(() => {
		if (document.cookie.length > 0) {
			Router.push('/')
		}
	}, [])

	return (
		<Layout self={self}>
			<div style={{ marginTop: '25px' }}>
				<SignupCard />
			</div>
		</Layout>
	)
}

SignupPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)
	return { self }
}

export default SignupPage
