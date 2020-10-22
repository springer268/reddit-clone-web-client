import { ShallowUser, TotalPost } from 'models'
import { NextPage, NextPageContext } from 'next'
import { getPostByIDQuery, getSelfQuery } from 'util/queries'
import { Layout } from 'components'
import { Header } from 'components/ui'

interface InitialProps {
	self: ShallowUser | null
	post: TotalPost | null
}

const PostPage: NextPage<InitialProps> = ({ self, post }) => {
	if (!post) {
		return (
			<Layout self={self}>
				<Header>No post found</Header>
			</Layout>
		)
	}

	return (
		<Layout self={self}>
			<Header>{post.title}</Header>
			<p>{post.content}</p>
		</Layout>
	)
}

PostPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)
	const post = await getPostByIDQuery({ id: ctx.query.id as string }, ctx)

	return { self, post }
}

export default PostPage
