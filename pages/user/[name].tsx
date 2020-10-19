import { NextPage, NextPageContext } from 'next'
import { User } from '../../src/models'
import { Layout, UserCard } from '../../src/components'
import { Header, Wrapper } from '../../src/components/ui'

interface InitialProps {
	user: User | null
}

const UserPage: NextPage<InitialProps> = ({ user }) => {
	const MainContent: React.FC = () => {
		return user ? (
			<>
				<UserCard />
			</>
		) : (
			<>
				<Header>No User found</Header>
			</>
		)
	}

	return (
		<Layout>
			<Wrapper>
				<MainContent />
			</Wrapper>
		</Layout>
	)
}

UserPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const name = ctx.query.name as string
	const user = await User.fetchByName(name)

	return { user }
}

export default UserPage
