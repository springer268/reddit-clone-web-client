import { ShallowUser } from 'models'
import { Navbar } from '.'
import { Wrapper } from './ui'

interface Props {
	self: ShallowUser | null
}

export const Layout: React.FC<Props> = ({ children, self }) => {
	return (
		<>
			<Navbar self={self} />
			<Wrapper>{children}</Wrapper>
		</>
	)
}
