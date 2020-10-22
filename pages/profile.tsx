import { NextPage, NextPageContext } from 'next'
import { getSelfQuery, getUserByNameQuery } from 'util/queries'
import { ShallowUser, TotalPost } from 'models'
import { Layout, PostCard } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'

interface InitialProps {
	selfData: ShallowUser | null
	posts: TotalPost[] | null
}

const ProfilePage: NextPage<InitialProps> = ({ selfData, posts }) => {
	const { self } = useSelf(selfData)
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
	if (!selfData) return { selfData, posts: null }

	const user = await getUserByNameQuery({ name: selfData.name }, ctx)
	return { selfData, posts: user?.posts ?? null }
}

export default ProfilePage
