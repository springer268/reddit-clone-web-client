import styled from 'styled-components'
import { User } from 'models'
import { Card, Header } from 'ui'

const Style = styled.div`
	padding: 0 0 15px 0;
	margin: 0 25px;

	${Header} {
		padding: 15px 0 5px 0;
	}
`

interface Props {
	user: User
}

export const UserCard: React.FC<Props> = ({ user }) => {
	return (
		<Card style={{ marginTop: '20px' }}>
			<Style>
				<Header>{user.name}</Header>
				<p>{user.description}</p>
			</Style>
		</Card>
	)
}
