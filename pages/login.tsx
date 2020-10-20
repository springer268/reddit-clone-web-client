import { NextPage } from 'next'
import { Layout, LoginCard } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'

interface InitialProps {}

const LoginPage: NextPage<InitialProps> = () => {
	return (
		<Layout>
			<Wrapper>
				<Header>Login</Header>
				<LoginCard />
			</Wrapper>
		</Layout>
	)
}

export default LoginPage
