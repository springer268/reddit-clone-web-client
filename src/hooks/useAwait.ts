import { useState, useEffect } from 'react'

export const useAwait = <T>(getter: () => Promise<T>) => {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const doThat = async () => {
			const loadedData = await getter()
			setLoading(false)
			setData(loadedData)
		}

		doThat()
	}, [])

	return { data, loading }
}
