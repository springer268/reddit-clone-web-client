import { useRef } from 'react'
import { NextPage, NextPageContext } from 'next'
import { Layout, PostCard } from 'components'
import { Header, Button } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'
import { useGetUserByNameWithTotalPostsQuery } from 'gen'

interface InitialProps {}

const AMOUNT = 1

const ProfilePage: NextPage<InitialProps> = ({}) => {
	const { self } = useSelf()
	const offsetRef = useRef(AMOUNT)
	useIsAuth(self)

	const { data, fetchMore } = useGetUserByNameWithTotalPostsQuery({
		variables: { name: self?.name ?? '', amount: AMOUNT, offset: 0 }
	})

	if (!self || !data?.GetUserByNameWithTotalPosts) return <Layout></Layout>

	const selfData = data.GetUserByNameWithTotalPosts

	return (
		<Layout>
			<Header>{`Your Profile: ${self.name}`}</Header>
			{selfData.posts.map(post => (
				<PostCard post={post} key={post.id} />
			))}
			<Button
				onClick={async () => {
					await fetchMore({
						variables: { amount: AMOUNT, offset: offsetRef.current },
						//@ts-ignore
						updateQuery: (prevResult, { fetchMoreResult }) => {
							if (
								!prevResult.GetUserByNameWithTotalPosts ||
								!fetchMoreResult?.GetUserByNameWithTotalPosts
							) {
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
				Load More
			</Button>
		</Layout>
	)
}

// ProfilePage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {}

export default ProfilePage
