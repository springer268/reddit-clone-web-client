import { useState } from 'react'
import { useRef } from 'react'
import { NextPage } from 'next'
import { Layout, PostCard } from 'components'
import { Header } from 'ui'
import { useIsAuth, useSelf } from 'hooks'
import { useGetUserByNameWithPostsQuery } from 'gql'
import InfiniteScroll from 'react-infinite-scroller'
import { useRouter } from 'next/router'

const FETCH_AMOUNT = 10

const UserPage: NextPage = () => {
	const { self } = useSelf()
	const router = useRouter()
	const [hasMore, setHasMore] = useState(true)
	const offsetRef = useRef(FETCH_AMOUNT)
	useIsAuth(self)

	const { data, loading, fetchMore } = useGetUserByNameWithPostsQuery({
		variables: { name: router.query.name as string, amount: FETCH_AMOUNT, offset: 0 }
	})

	if (!self || loading) return <Layout></Layout>
	else if (!data) {
		return (
			<Layout>
				<Header>User does not exist</Header>
			</Layout>
		)
	}

	const user = data.GetUserByName

	return (
		<Layout>
			<Header>{user.name}</Header>
			<InfiniteScroll
				pageStart={0}
				hasMore={hasMore}
				loadMore={async () => {
					await fetchMore({
						variables: { amount: FETCH_AMOUNT, offset: offsetRef.current },
						updateQuery: (prevResult, { fetchMoreResult }) => {
							if (!prevResult.GetUserByName || !fetchMoreResult?.GetUserByName) {
								setHasMore(false)
								return prevResult
							}

							fetchMoreResult.GetUserByName.posts = [
								...prevResult.GetUserByName.posts,
								...fetchMoreResult.GetUserByName.posts
							]

							offsetRef.current += FETCH_AMOUNT

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
