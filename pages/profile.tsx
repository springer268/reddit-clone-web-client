import { useState } from 'react'
import { useRef } from 'react'
import { NextPage } from 'next'
import { Layout, PostCard } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'
import { useGetUserByNameWithTotalPostsQuery } from 'gen'
import InfiniteScroll from 'react-infinite-scroller'

const FETCH_AMOUNT = 10

const ProfilePage: NextPage = () => {
	const { self } = useSelf()
	const [hasMore, setHasMore] = useState(true)
	const offsetRef = useRef(FETCH_AMOUNT)
	useIsAuth(self)

	const { data, fetchMore } = useGetUserByNameWithTotalPostsQuery({
		variables: { name: self?.name ?? '', amount: FETCH_AMOUNT, offset: 0 }
	})

	if (!self || !data?.GetUserByNameWithTotalPosts) return <Layout></Layout>

	const selfData = data.GetUserByNameWithTotalPosts

	return (
		<Layout>
			<Header>{`Your Profile: ${self.name}`}</Header>
			<InfiniteScroll
				pageStart={0}
				hasMore={hasMore}
				loadMore={async () => {
					await fetchMore({
						variables: { amount: FETCH_AMOUNT, offset: offsetRef.current },
						updateQuery: (prevResult, { fetchMoreResult }) => {
							if (
								!prevResult.GetUserByNameWithTotalPosts ||
								!fetchMoreResult?.GetUserByNameWithTotalPosts
							) {
								setHasMore(false)
								return prevResult
							}

							fetchMoreResult.GetUserByNameWithTotalPosts.posts = [
								...prevResult.GetUserByNameWithTotalPosts.posts,
								...fetchMoreResult.GetUserByNameWithTotalPosts.posts
							]

							offsetRef.current += FETCH_AMOUNT

							return fetchMoreResult
						}
					})
				}}
			>
				{selfData.posts.map(post => (
					<PostCard post={post} key={post.id} />
				))}
			</InfiniteScroll>
		</Layout>
	)
}

export default ProfilePage
