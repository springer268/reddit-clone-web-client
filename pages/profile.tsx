import { NextPage, NextPageContext } from 'next'
import { getSelfQuery, getUserByNameQuery } from 'util/queries'
import { TotalPost } from 'models'
import { Layout, PostCard } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'

interface InitialProps {
	posts: TotalPost[] | null
}

const ProfilePage: NextPage<InitialProps> = ({ posts }) => {
	const { self } = useSelf()
	useIsAuth(self)

	if (!self || !posts) return <Layout></Layout>

	return (
		<Layout>
			<Header>{`Your Profile: ${self.name}`}</Header>
			{posts.map(post => (
				<PostCard post={post} key={post.id} />
			))}
		</Layout>
	)
}

ProfilePage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const selfData = await getSelfQuery({}, ctx)
	if (!selfData) return { posts: null }

	const user = await getUserByNameQuery({ name: selfData.name }, ctx)
	return { posts: user?.posts ?? null }
}

export default ProfilePage
