import { ShallowUser, ShallowCommunity } from 'models'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import { getCommunitiesQuery, getSelfQuery } from 'util/queries'
import { Layout } from 'components'
import { Header } from 'components/ui'
import { useIsAuth } from 'hooks'

interface InitialProps {
	self: ShallowUser | null
	communities: ShallowCommunity[]
}

const CommunitiesPage: NextPage<InitialProps> = ({ self, communities }) => {
	useIsAuth(self)

	return (
		<Layout self={self}>
			<Header>Hello</Header>
			{communities.map(community => (
				<Link href={`/community/${community.name}`} key={community.id}>
					<div>{community.name}</div>
				</Link>
			))}
		</Layout>
	)
}

CommunitiesPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)
	const communities = await getCommunitiesQuery({}, ctx)

	return { self, communities }
}

export default CommunitiesPage
