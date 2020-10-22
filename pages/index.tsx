import { useIsAuth } from 'hooks'
import { ShallowUser } from 'models'
import { NextPage, NextPageContext } from 'next'
import { getSelfQuery } from 'util/queries'
import { Layout } from '../src/components'
import { Header } from '../src/components/ui'

interface InitialProps {
	self: ShallowUser | null
}

const Feed: NextPage<InitialProps> = ({ self }) => {
	useIsAuth(self)

	return (
		<Layout self={self}>
			<Header>{`${self?.name}'s Feed` ?? 'Default Feed'}</Header>
		</Layout>
	)
}

Feed.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const self = await getSelfQuery({ yeah: '' }, ctx)
	return { self }
}

export default Feed
