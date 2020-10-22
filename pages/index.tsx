import { useIsAuth, useSelf } from 'hooks'
import { ShallowUser } from 'models'
import { NextPage, NextPageContext } from 'next'
import { getSelfQuery } from 'util/queries'
import { Layout } from '../src/components'
import { Header } from '../src/components/ui'

interface InitialProps {}

const Feed: NextPage<InitialProps> = ({}) => {
	const { self } = useSelf()
	useIsAuth(self)

	if (!self) return <Layout></Layout>

	return (
		<Layout>
			<Header>{self.name}</Header>
		</Layout>
	)
}

// Feed.getInitialProps = async (ctx: NextPageContext): Promise<InitialProps> => {}

export default Feed
