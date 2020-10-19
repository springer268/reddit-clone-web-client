import { NextPage, NextPageContext } from 'next'
import { Community } from '../../src/models'
import { Layout } from '../../src/components'
import { Wrapper } from '../../src/components/ui'

interface InitialProps {
	community: Community
}

const CommunityPage: NextPage<InitialProps> = ({ community }) => {
	return (
		<Layout>
			<Wrapper>
				<h1>{community.name}</h1>
			</Wrapper>
		</Layout>
	)
}

CommunityPage.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const name = ctx.query.name as string
	const community = await Community.fetchByName(name)

	return { community }
}

export default CommunityPage
