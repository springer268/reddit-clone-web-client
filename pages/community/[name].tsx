import { NextPage, NextPageContext } from 'next'
import { Community, Post } from '../../src/models'
import { Layout, AddPostCard, PostCard } from '../../src/components'
import { Wrapper, Header } from '../../src/components/ui'
import { useAwait, useUser } from '../../src/hooks'

interface InitialProps {
	community: Community | null
}

const CommunityPage: NextPage<InitialProps> = ({ community }) => {
	const { user, loading } = useUser()
	const { data: posts, loading: loading2 } = useAwait(async () =>
		community ? await Community.getPostsByID(community.id) : null
	)

	if (community && user && posts) {
		return (
			<Layout>
				<Wrapper>
					<Header>{community.name}</Header>
					<div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
						<div>
							{posts
								.slice()
								.sort((a, b) => b.upvotes - a.upvotes)
								.map(post => (
									<PostCard post={post as Required<Post>} key={post.id} />
								))}
						</div>
						<div style={{ margin: '0 0 0 20px' }}>
							<AddPostCard community={community} user={user} />
						</div>
					</div>
				</Wrapper>
			</Layout>
		)
	}

	if (loading || loading2) return <></>

	return (
		<Layout>
			<Wrapper>
				<Header>Community does not exist!</Header>
			</Wrapper>
		</Layout>
	)
}

CommunityPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const name = ctx.query.name as string
	const community = await Community.fetchByName(name)

	return { community }
}

export default CommunityPage
