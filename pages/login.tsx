import { NextPage } from 'next'
import { Layout, LoginCard } from 'components'

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
