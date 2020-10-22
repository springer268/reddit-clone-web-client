import { NextPage, NextPageContext } from 'next'
import { Layout, LoginCard } from '../src/components'
import { getSelfQuery } from 'util/queries'
import { ShallowUser } from 'models'

interface InitialProps {}

const LoginPage: NextPage<InitialProps> = ({}) => {
	return (
		<Layout>
			<div style={{ marginTop: '25px' }}>
				<LoginCard />
			</div>
		</Layout>
	)
}

// LoginPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {}

export default LoginPage
