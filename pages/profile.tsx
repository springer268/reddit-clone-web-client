import { useUser } from '../src/hooks'
import { NextPage } from 'next'
import { Layout, PostCard } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'
import { Post } from 'models'

interface InitialProps {}

const ProfilePage: NextPage<InitialProps> = () => {
	const { user, loading } = useUser()

	if (loading) return <Layout></Layout>

	if (!user) {
		return (
			<Layout>
				<Wrapper>
					<Header>Login to view profile</Header>
				</Wrapper>
			</Layout>
		)
	}

	return (
		<Layout>
			<Wrapper>
				<Header>{user.name}: Your posts</Header>
				{user
					.posts!.slice()
					.sort((p1, p2) => p2.upvotes - p1.upvotes)
					.map(post => (
						<PostCard key={post.id} post={post as Required<Post>} />
					))}
			</Wrapper>
		</Layout>
	)
}

export default ProfilePage
