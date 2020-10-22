import { ShallowUser, ShallowCommunity } from 'models'
import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import { getCommunitiesQuery, getSelfQuery } from 'util/queries'
import { Layout } from 'components'
import { Header } from 'components/ui'
import { useIsAuth, useSelf } from 'hooks'

interface InitialProps {
	selfData: ShallowUser | null
	communities: ShallowCommunity[]
}

const CommunitiesPage: NextPage<InitialProps> = ({ selfData, communities }) => {
	const { self } = useSelf(selfData)
	useIsAuth(self)

	if (!self) return <Layout></Layout>

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

CommunitiesPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const selfData = await getSelfQuery({}, ctx)
	const communities = await getCommunitiesQuery({}, ctx)

	return { selfData, communities }
}

export default CommunitiesPage
