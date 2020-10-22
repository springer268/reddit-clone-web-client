import { Navbar } from '.'
import { Wrapper } from './ui'

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Wrapper>{children}</Wrapper>
		</>
	)
}
