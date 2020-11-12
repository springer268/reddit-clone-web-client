import { useRef, useState } from 'react'
import { NextPage } from 'next'
import { Layout, AddPostCard, PostCard } from 'components'
import { Header } from 'ui'
import { useIsAuth, useSelf } from 'hooks'
import { useGetCommunityWithPostsByNameQuery } from 'gql'
import { useRouter } from 'next/router'
import InfiniteScroll from 'react-infinite-scroller'

interface InitialProps {}

const FETCH_AMOUNT = 5

const CommunityPage: NextPage<InitialProps> = () => {
	const router = useRouter()
	const { self } = useSelf()
	const [areMorePosts, setAreMorePosts] = useState(true)
	const offset = useRef(FETCH_AMOUNT)
	useIsAuth(self)

	const { data, fetchMore, loading } = useGetCommunityWithPostsByNameQuery({
		variables: { name: router.query.name as string, amount: FETCH_AMOUNT, offset: 0 }
	})

	if (!self || loading) return <Layout></Layout>
	else if (!data) {
		return (
			<Layout>
				<Header>Community does not exist</Header>
			</Layout>
		)
	}

	const community = data.GetCommunityByName

	return (
		<Layout>
			<Header>{community.name}</Header>
			<div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
				<InfiniteScroll
					pageStart={0}
					hasMore={areMorePosts}
					loadMore={async () => {
						await fetchMore({
							variables: { amount: FETCH_AMOUNT, offset: offset.current },
							//@ts-ignore
							updateQuery: (prevResult, { fetchMoreResult }) => {
								if (
									!fetchMoreResult?.GetCommunityByName ||
									!prevResult.GetCommunityByName ||
									fetchMoreResult.GetCommunityByName.posts.length === 0
								) {
									setAreMorePosts(false)
									return prevResult
								}

								fetchMoreResult.GetCommunityByName.posts = [
									...prevResult.GetCommunityByName.posts,
									...fetchMoreResult.GetCommunityByName.posts
								]

								offset.current += FETCH_AMOUNT

								return fetchMoreResult
							}
						})
					}}
				>
					{community.posts.map(post => (
						<PostCard post={post} key={post.id} />
					))}
				</InfiniteScroll>
				<div style={{ margin: '0 0 0 20px' }}>
					<AddPostCard community={community} self={self} />
				</div>
			</div>
		</Layout>
	)
}

export default CommunityPage
