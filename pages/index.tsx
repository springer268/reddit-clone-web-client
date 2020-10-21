import { useUser } from '../src/hooks'
import { NextPage } from 'next'
import { Layout } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'

interface InitialProps {}

const Feed: NextPage<InitialProps> = () => {
	const { user } = useUser()

	return (
		<Layout>
			<Wrapper>
				<Header>{user?.name ?? 'You should login!'}</Header>
			</Wrapper>
		</Layout>
	)
}

export default Feed
