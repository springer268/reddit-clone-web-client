import { useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import { Layout, SignupCard } from '../src/components'
import Router from 'next/router'
import { ShallowUser } from 'models'
import { getSelfQuery } from 'util/queries'
import { useSelf } from 'hooks'

interface InitialProps {}

const SignupPage: NextPage<InitialProps> = ({}) => {
	const { self } = useSelf()

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
