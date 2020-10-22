import { NextPage, NextPageContext } from 'next'
import { CompleteUser, ShallowUser } from 'models'
import { Layout, PostCard } from 'components'
import { Header } from 'components/ui'
import { getSelfQuery, getUserByNameQuery } from 'util/queries'
import { useIsAuth, useSelf } from 'hooks'

interface InitialProps {
	user: CompleteUser | null
}

const UserPage: NextPage<InitialProps> = ({ user }) => {
	const { self } = useSelf()
	useIsAuth(self)

	if (!self) return <Layout></Layout>

	if (!user) {
		return (
			<Layout>
				<Header>User does not exist.</Header>
			</Layout>
		)
	}

	return (
		<Layout>
			<Header>{user.name}</Header>
			{user.posts.map(post => (
				<PostCard post={post} key={post.id} />
			))}
		</Layout>
	)
}

UserPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const user = await getUserByNameQuery({ name: ctx.query.name as string })

	return { user }
}

export default UserPage
