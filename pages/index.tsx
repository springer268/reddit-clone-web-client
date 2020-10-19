import { NextPage, NextPageContext } from 'next'
import { Post, User } from '../src/models'
import { Layout, PostCard } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'

interface InitialProps {
	posts: Required<Post>[] | null
}

const Feed: NextPage<InitialProps> = ({ posts }) => {
	const Posts: React.FC = () => {
		const renderedPosts = posts?.map(post => <PostCard key={post.id} post={post} />) ?? <p>No posts!</p>

		return <>{renderedPosts}</>
	}

	return (
		<Layout>
			<Wrapper>
				<Header>Your Feed</Header>
				<Posts />
			</Wrapper>
		</Layout>
	)
}

Feed.getInitialProps = async (_ctx: NextPageContext): Promise<InitialProps> => {
	const user = await User.fetchByName('Nick', { posts: true })

	return { posts: user?.posts ?? null }
}

export default Feed
