import { ShallowUser, TotalPost } from 'models'
import { NextPage, NextPageContext } from 'next'
import { getPostByIDQuery, getSelfQuery } from 'util/queries'
import { Layout } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'

interface InitialProps {
	selfData: ShallowUser | null
	post: TotalPost | null
}

const PostPage: NextPage<InitialProps> = ({ selfData, post }) => {
	const { self } = useSelf(selfData)
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
	const selfData = await getSelfQuery({}, ctx)
	const post = await getPostByIDQuery({ id: ctx.query.id as string }, ctx)

	return { selfData, post }
}

export default PostPage
