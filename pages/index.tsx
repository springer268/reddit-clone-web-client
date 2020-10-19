import { NextPage, NextPageContext } from 'next'
import { Post } from '../src/entities'
import { Layout, PostCard } from '../src/components'
import { Wrapper, Header } from '../src/components/ui'

interface InitialProps {
	posts: Post[]
}

const Feed: NextPage<InitialProps> = ({ posts }) => {
	const Posts: React.FC = () => {
		const renderedPosts = posts.map(post => <PostCard key={post.id} post={post} />)

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
	const posts = (await Promise.all([1, 2, 3].map(async i => await Post.fetchByID(i.toString())))) as Post[]

	return { posts }
}

export default Feed
