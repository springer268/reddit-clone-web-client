import { useIsAuth, useSelf } from 'hooks'
import { ShallowUser } from 'models'
import { NextPage, NextPageContext } from 'next'
import { getSelfQuery } from 'util/queries'
import { Layout } from '../src/components'
import { Header } from '../src/components/ui'

interface InitialProps {
	selfData: ShallowUser | null
}

const Feed: NextPage<InitialProps> = ({ selfData }) => {
	const { self } = useSelf(selfData)
	useIsAuth(self)

	if (!self) return <Layout></Layout>

	return (
		<Layout>
			<Header>{self.name}</Header>
		</Layout>
	)
}

Feed.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {
	const selfData = await getSelfQuery({}, ctx)
	return { selfData }
}

export default Feed
