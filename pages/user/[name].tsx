import { NextPage, NextPageContext } from 'next'
import { CompleteUser, ShallowUser } from 'models'
import { Layout, PostCard } from 'components'
import { Header } from 'components/ui'
import { getSelfQuery, getUserByNameQuery } from 'util/queries'
import { useIsAuth } from 'hooks'

interface InitialProps {
	self: ShallowUser | null
	user: CompleteUser | null
}

const UserPage: NextPage<InitialProps> = ({ user, self }) => {
	useIsAuth(self)

	if (!user) {
		return (
			<Layout self={self}>
				<Header>User does not exist.</Header>
			</Layout>
		)
	}

	return (
		<Layout self={self}>
			<Header>{user.name}</Header>
			{user.posts.map(post => (
				<PostCard post={post} key={post.id} />
			))}
		</Layout>
	)
}

UserPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)
	const user = await getUserByNameQuery({ name: ctx.query.name as string })

	return { user, self }
}

export default UserPage
