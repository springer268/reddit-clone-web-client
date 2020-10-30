import { NextPage } from 'next'
import { CommentSection, Layout } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'
import { useRouter } from 'next/router'
import { useGetPostWithCommentsByIdQuery } from 'gql'

const FETCH_COMMENT_AMOUNT = 5

const PostPage: NextPage = () => {
	const { self } = useSelf()
	useIsAuth(self)
	const router = useRouter()
	const { data, loading } = useGetPostWithCommentsByIdQuery({
		variables: { id: router.query.id as string, amount: FETCH_COMMENT_AMOUNT, offset: 0 }
	})

	if (!self || loading) return <Layout></Layout>
	else if (!data) {
		return (
			<Layout>
				<Header>No post found</Header>
			</Layout>
		)
	}

	const post = data.GetPostByID

	return (
		<Layout>
			<Header>{post.title}</Header>
			<p>{post.content}</p>
			<CommentSection post={post} />
		</Layout>
	)
}

export default PostPage
