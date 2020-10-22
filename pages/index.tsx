import { useIsAuth, useSelf } from 'hooks'
import { NextPage, NextPageContext } from 'next'
import { Layout } from 'components'
import { Header } from 'components/ui'

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
