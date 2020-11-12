import Link from 'next/link'
import { NextPage, NextPageContext } from 'next'
import { useIsAuth, useSelf } from 'hooks'
import { Layout } from 'components'
import { Header } from 'ui'
import { useGetCommunitiesByUserIdQuery } from 'gql'

const FETCH_AMOUNT = 5

const Feed: NextPage = () => {
	const { self } = useSelf()
	const { data } = useGetCommunitiesByUserIdQuery({
		variables: {
			name: self?.name ?? '',
			amount: FETCH_AMOUNT,
			offset: 0
		}
	})
	useIsAuth(self)

	if (!self || !data?.GetUserByName.communities) return <Layout></Layout>

	const communities = data.GetUserByName.communities

	return (
		<Layout>
			<Header>{self.name}</Header>
			<div>
				<h3>Your communities</h3>
				<ul>
					{communities.map(c => (
						<li key={c.id}>
							<Link href={`/community/${c.name}`}>{c.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	)
}

export default Feed
