import { useIsAuth, useSelf } from 'hooks'
import { NextPage, NextPageContext } from 'next'
import { Layout } from 'components'
import { Header } from 'components/ui'

const Feed: NextPage = () => {
	const { self } = useSelf()
	useIsAuth(self)

	if (!self) return <Layout></Layout>

	return (
		<Layout>
			<Header>{self.name}</Header>
		</Layout>
	)
}

export default Feed
