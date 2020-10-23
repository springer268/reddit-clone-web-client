import { useState } from 'react'
import { useRef } from 'react'
import { NextPage } from 'next'
import { Layout, PostCard } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'
import { useGetUserByNameWithTotalPostsQuery } from 'gen'
import InfiniteScroll from 'react-infinite-scroller'
import { useRouter } from 'next/router'

const AMOUNT = 10

const UserPage: NextPage = () => {
	const { self } = useSelf()
	const router = useRouter()
	const [hasMore, setHasMore] = useState(true)
	const offsetRef = useRef(AMOUNT)
	useIsAuth(self)

	const { data, fetchMore } = useGetUserByNameWithTotalPostsQuery({
		variables: { name: router.query.name as string, amount: AMOUNT, offset: 0 }
	})

	if (!self || !data?.GetUserByNameWithTotalPosts) return <Layout></Layout>

	const user = data.GetUserByNameWithTotalPosts

	return (
		<Layout>
			<Header>{self.name}</Header>
			<InfiniteScroll
				pageStart={0}
				hasMore={hasMore}
				loadMore={async () => {
					await fetchMore({
						variables: { amount: AMOUNT, offset: offsetRef.current },
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

							offsetRef.current += AMOUNT

							return fetchMoreResult
						}
					})
				}}
			>
				{user.posts.map(post => (
					<PostCard post={post} key={post.id} />
				))}
			</InfiniteScroll>
		</Layout>
	)
}

export default UserPage
