import Link from 'next/link'
import styled from 'styled-components'
import { theme } from './ui/theme'

const NavUI = styled.nav`
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

export const Navbar = () => {
	return (
		<NavUI>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<ul>
				<li>
					<Link href='/login'>Login</Link>
				</li>
				<li>
					<Link href='/signup'>Signup</Link>
				</li>
				<li></li>
				<li></li>
			</ul>
		</NavUI>
	)
}
