import { NextPage, NextPageContext } from 'next'
import { User, CompleteUser } from '../../src/models'
import { Layout, UserCard, PostCard } from '../../src/components'
import { Header, Wrapper } from '../../src/components/ui'

interface InitialProps {
	user: CompleteUser | null
}

const UserPage: NextPage<InitialProps> = ({ user }) => {
	const MainContent: React.FC = () => {
		return user ? (
			<>
				<UserCard user={user} />
				{user.posts.map(post => (
					<PostCard post={post} key={post.id} />
				))}
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
	const user = await User.fetchByName(name, { posts: true })

	return { user }
}

export default UserPage
