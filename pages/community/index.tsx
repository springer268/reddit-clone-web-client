import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from 'components'
import { Header } from 'ui'
import { useIsAuth, useSelf } from 'hooks'
import { useGetCommunitiesQuery } from 'gql'

const CommunitiesPage: NextPage = () => {
	const { self } = useSelf()
	useIsAuth(self)
	const { data } = useGetCommunitiesQuery()

	if (!self || !data?.GetCommunities) return <Layout></Layout>

	const communities = data.GetCommunities

	return (
		<Layout>
			<Header>Communities</Header>
			{communities.map(community => (
				<Link href={`/community/${community.name}`} key={community.id}>
					<div style={{ cursor: 'pointer' }}>{community.name}</div>
				</Link>
			))}
		</Layout>
	)
}

export default CommunitiesPage
