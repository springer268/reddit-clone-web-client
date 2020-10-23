import { useRef, useState } from 'react'
import { NextPage, NextPageContext } from 'next'
import { ShallowCommunity, TotalPost } from 'models'
import { Layout, AddPostCard, PostCard } from 'components'
import { Header, Button } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'
import { concatPagination } from '@apollo/client/utilities'
import {
	GetCommunityByNameQuery,
	GetCommunityWithTotalPostsByNameQuery,
	useGetCommunityWithTotalPostsByNameQuery
} from 'gen'
import { useRouter } from 'next/router'

interface InitialProps {}

const AMOUNT = 2

const CommunityPage: NextPage<InitialProps> = () => {
	const router = useRouter()
	const { self } = useSelf()
	const [areMorePosts, setAreMorePosts] = useState(true)
	const offset = useRef(AMOUNT)
	useIsAuth(self)

	const { data, fetchMore } = useGetCommunityWithTotalPostsByNameQuery({
		variables: { name: router.query.name as string, amount: AMOUNT, offset: 0 }
	})

	if (!data || !self) return <Layout></Layout>

	const community = data.GetCommunityByName

	if (!community) {
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
					{community.posts.map(post => (
						<PostCard post={post} key={post.id} />
					))}
					{areMorePosts && (
						<Button
							onClick={async () => {
								console.log(offset.current)
								await fetchMore({
									variables: { amount: AMOUNT, offset: offset.current },
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

										offset.current += AMOUNT

										return fetchMoreResult
									}
								})
							}}
						>
							Load more
						</Button>
					)}
				</div>
				<div style={{ margin: '0 0 0 20px' }}>
					<AddPostCard community={community} self={self} />
				</div>
			</div>
		</Layout>
	)
}

export default CommunityPage
