import { ShallowUser, TotalPost } from 'models'
import { NextPage, NextPageContext } from 'next'
import { getPostByIDQuery, getSelfQuery } from 'util/queries'
import { Layout } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'

interface InitialProps {
	post: TotalPost | null
}

const PostPage: NextPage<InitialProps> = ({ post }) => {
	const { self } = useSelf()
	useIsAuth(self)

	if (!self) return <Layout></Layout>

	if (!post) {
		return (
			<Layout>
				<Header>No post found</Header>
			</Layout>
		)
	}

	return (
		<Layout>
			<Header>{post.title}</Header>
			<p>{post.content}</p>
		</Layout>
	)
}

PostPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const post = await getPostByIDQuery({ id: ctx.query.id as string }, ctx)

	return { post }
}

export default PostPage
