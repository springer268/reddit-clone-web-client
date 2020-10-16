import styled from 'styled-components'

const UI = styled.button`
	padding: 5px 10px 5px 10px;
	border-radius: 5px;
	border: none;
	outline: none;
	font-weight: 500;
	text-transform: uppercase;
	cursor: pointer;

	&:hover {
		transform: scale(1.03);
	}
`

export const Button: React.FC<{}> = ({ children }) => {
	return <UI>{children}</UI>
}
