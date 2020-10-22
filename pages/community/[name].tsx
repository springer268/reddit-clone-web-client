import { NextPage, NextPageContext } from 'next'
import { ShallowCommunity, ShallowUser, TotalPost } from 'models'
import { Layout, AddPostCard, PostCard } from '../../src/components'
import { Header } from '../../src/components/ui'
import {
	getCommunityByName as getCommunityByNameQuery,
	getPostsFromCommunityByIDQuery,
	getSelfQuery
} from 'util/queries'
import { useIsAuth, useSelf } from 'hooks'

interface InitialProps {
	selfData: ShallowUser | null
	community: ShallowCommunity | null
	posts: TotalPost[] | null
}

const CommunityPage: NextPage<InitialProps> = ({ selfData, community, posts }) => {
	const { self } = useSelf(selfData)
	useIsAuth(self)

	if (!self) return <Layout></Layout>

	if (!community || !posts) {
		return (
			<Layout>
				<Header>Community does not exist</Header>
			</Layout>
		)
	}

	return (
		<Layout>
			<Header>{community.name}</Header>
			<div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
				<div>
					{posts.map(post => (
						<PostCard post={post} key={post.id} />
					))}
				</div>
				{self && (
					<>
						<div style={{ margin: '0 0 0 20px' }}>
							<AddPostCard community={community} self={self} />
						</div>
					</>
				)}
			</div>
		</Layout>
	)
}

CommunityPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const selfData = await getSelfQuery({}, ctx)

	const name = ctx.query.name as string
	const community = await getCommunityByNameQuery({ name }, ctx)

	if (!community) return { community: null, posts: null, selfData }

	const posts = await getPostsFromCommunityByIDQuery({ communityID: community.id }, ctx)

	return { community, posts, selfData }
}

export default CommunityPage
