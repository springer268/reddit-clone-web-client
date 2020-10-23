import { NextPage } from 'next'
import { Layout, LoginCard } from 'components'

const LoginPage: NextPage = () => {
	return (
		<Layout>
			<div style={{ marginTop: '25px' }}>
				<LoginCard />
			</div>
		</Layout>
	)
}

export default LoginPage
