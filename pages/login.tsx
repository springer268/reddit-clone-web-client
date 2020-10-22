import { NextPage, NextPageContext } from 'next'
import { Layout, LoginCard } from '../src/components'
import { getSelfQuery } from 'util/queries'
import { ShallowUser } from 'models'

interface InitialProps {
	selfData: ShallowUser | null
}

const LoginPage: NextPage<InitialProps> = ({ selfData }) => {
	return (
		<Layout>
			<div style={{ marginTop: '25px' }}>
				<LoginCard />
			</div>
		</Layout>
	)
}

LoginPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const selfData = await getSelfQuery({}, ctx)
	return { selfData }
}

export default LoginPage
