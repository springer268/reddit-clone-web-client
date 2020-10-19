import { Card, Header, Wrapper } from './ui'

interface Props {}

export const UserCard: React.FC<Props> = _props => {
	return (
		<Card style={{ marginTop: '20px' }}>
			<Wrapper>
				<Header>Nick</Header>
			</Wrapper>
		</Card>
	)
}
