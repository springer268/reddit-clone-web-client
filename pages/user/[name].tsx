import { NextPage, NextPageContext } from 'next'
import { User } from '../../src/entities'
import { Layout } from '../../src/components'
import { Header, Wrapper } from '../../src/components/ui'

interface InitialProps {
	user: User | null
}

const UserPage: NextPage<InitialProps> = ({ user }) => {
	const Body = () =>
		user ? (
			<Header>
				{user.name}, {user.email}, {user.description}
			</Header>
		) : (
			<Header>No User found</Header>
		)

	return (
		<Layout>
			<Wrapper>
				<Body />
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
