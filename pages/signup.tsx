import { NextPage } from 'next'
import { Layout, SignupCard } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'

interface InitialProps {}

const SignupPage: NextPage<InitialProps> = () => {
	return (
		<Layout>
			<Wrapper>
				<Header>Signup</Header>
				<SignupCard />
			</Wrapper>
		</Layout>
	)
}

export default SignupPage
