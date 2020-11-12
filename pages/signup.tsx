import { NextPage } from 'next'
import { Layout, SignupCard } from 'components'

const SignupPage: NextPage = () => {
	return (
		<Layout>
			<div style={{ marginTop: '25px' }}>
				<SignupCard />
			</div>
		</Layout>
	)
}

export default SignupPage
