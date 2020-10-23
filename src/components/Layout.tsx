import { Navbar, Footer } from '.'
import { Wrapper } from './ui'
import styled from 'styled-components'

const PageContainer = styled.div`
	position: relative;
	min-height: 100vh;
`

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Wrapper>{children}</Wrapper>
		</>
	)
}
