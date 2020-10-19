import { NextPage, NextPageContext } from 'next'
import { Post } from '../../src/models'
import { Layout } from '../../src/components'
import { Header, Wrapper } from '../../src/components/ui'

interface InitialProps {
	post: Post | null
}

const UserPage: NextPage<InitialProps> = ({ post }) => {
	const MainContent: React.FC = () => {
		return post ? (
			<Header>
				{post.title}, {post.content}
			</Header>
		) : (
			<Header>No Post found</Header>
		)
	}

	return (
		<Layout>
			<Wrapper>
				<MainContent />
			</Wrapper>
		</Layout>
	)
}

UserPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const id = ctx.query.id as string
	const post = await Post.fetchByID(id)

	return { post }
}

export default UserPage
