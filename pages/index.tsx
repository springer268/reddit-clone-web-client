import { NextPage } from 'next'
import { Layout, Card } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'

interface InitialProps {}

const HomePage: NextPage<InitialProps> = () => {
	return (
		<Layout>
			<Wrapper>
				<Header>Feed</Header>
				<Card
					info={{
						username: 'ZeroSevenTen',
						body: 'Hello World!',
						communityName: 'fehstudents',
						numComments: 2
					}}
				/>
				<Card
					info={{
						username: 'ZeroSevenTen',
						body: 'Hello World!',
						communityName: 'fehstudents',
						numComments: 2
					}}
				/>
			</Wrapper>
		</Layout>
	)
}

export default HomePage
