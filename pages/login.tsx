import { NextPage, NextPageContext } from 'next'
import { Layout, LoginCard } from '../src/components'
import { getSelfQuery } from 'util/queries'
import { ShallowUser } from 'models'

interface InitialProps {
	self: ShallowUser | null
}

const LoginPage: NextPage<InitialProps> = ({ self }) => {
	return (
		<Layout self={self}>
			<div style={{ marginTop: '25px' }}>
				<LoginCard />
			</div>
		</Layout>
	)
}

LoginPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)
	return { self }
}

export default LoginPage
