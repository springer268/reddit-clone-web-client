import { NextPage } from 'next'
import { Layout } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'
import { useRouter } from 'next/router'
import { useGetPostByIdQuery } from 'gen'

const PostPage: NextPage = () => {
	const { self } = useSelf()
	useIsAuth(self)
	const router = useRouter()
	const { data } = useGetPostByIdQuery({ variables: { id: router.query.id as string } })

	if (!self || !data?.GetPostByID) return <Layout></Layout>

	const post = data.GetPostByID

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

export default PostPage
