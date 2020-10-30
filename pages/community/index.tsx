import { NextPage } from 'next'
import Link from 'next/link'
import { Layout } from 'components'
import { Header } from 'components/ui'
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
			<Header>Hello</Header>
			{communities.map(community => (
				<Link href={`/community/${community.name}`} key={community.id}>
					<div>{community.name}</div>
				</Link>
			))}
		</Layout>
	)
}

export default CommunitiesPage
