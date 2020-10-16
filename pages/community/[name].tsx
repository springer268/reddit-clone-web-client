import { NextPage, NextPageContext } from 'next'
import { Community } from '../../src/entities'
import { Layout } from '../../src/components'

interface InitialProps {
	community: Community
}

const CommunityPage: NextPage<InitialProps> = ({ community }) => {
	return (
		<Layout>
			<h1>{community.name}</h1>
		</Layout>
	)
}

CommunityPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const name = ctx.query.name as string
	const community = await Community.fetchByName(name)

	return { community }
}

export default CommunityPage
