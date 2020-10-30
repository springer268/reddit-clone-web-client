import { backendApolloClient } from 'apollo'
import { useSelf } from 'hooks'
import { useEffect } from 'react'
import { GetSelfDocument, GetSelfQuery } from 'gql'

export const SelfGetter: React.FC<{}> = () => {
	const { setSelf } = useSelf()

	useEffect(() => {
		const main = async () => {
			const res = await backendApolloClient.query<GetSelfQuery>({ query: GetSelfDocument })
			setSelf(res.data.GetSelf ?? null)
		}

		main()
	}, [])

	return <></>
}
