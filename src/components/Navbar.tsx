import { useSelf } from 'hooks'
import Link from 'next/link'
import styled from 'styled-components'
import { theme } from 'ui'

const NavUI = styled.nav`
	position: sticky;
	top: 0;
	height: 48px;
	background: ${theme.bg_secondary};
	border-bottom: 1px solid ${theme.bg_border_lazy};
	display: flex;
	justify-content: space-between;

	ul {
		height: 100%;
		display: flex;
		padding: 0 0 0 40px;

		li {
			margin: auto;
			font-size: 25px;
			font-weight: 500;
			padding: 0 5px;
		}
	}
`

interface Props {}

export const Navbar: React.FC<Props> = () => {
	const { self } = useSelf()

	return (
		<NavUI>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/profile'>Profile</Link>
				</li>
			</ul>
			<ul>
				{self ? (
					<>
						<li>
							<Link href='/community'>Communities</Link>
						</li>
						<li>
							<Link href='/logout'>Logout</Link>
						</li>
						<li></li>
					</>
				) : (
					<>
						<li>
							<Link href='/login'>Login</Link>
						</li>
						<li>
							<Link href='/signup'>Signup</Link>
						</li>
						<li></li>
					</>
				)}
			</ul>
		</NavUI>
	)
}
