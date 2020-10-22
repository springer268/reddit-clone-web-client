import { NextPage, NextPageContext } from 'next'
import { getSelfQuery, getUserByNameQuery } from 'util/queries'
import { CompleteUser } from 'models'
import { Layout, PostCard } from 'components'
import { Header } from 'components/ui'
import { useIsAuth } from 'hooks'

interface InitialProps {
	self: CompleteUser | null
}

const ProfilePage: NextPage<InitialProps> = ({ self }) => {
	useIsAuth(self)

	if (!self) {
		return (
			<Layout self={self}>
				<Header>You should login!</Header>
			</Layout>
		)
	}

	return (
		<Layout self={self}>
			<Header>{`Your Profile: ${self.name}`}</Header>
			{self.posts.map(post => (
				<PostCard post={post} key={post.id} />
			))}
		</Layout>
	)
}

ProfilePage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)

	if (!self) return { self }

	const selfWithPosts = await getUserByNameQuery({ name: self.name }, ctx)

	return { self: selfWithPosts }
}

export default ProfilePage
