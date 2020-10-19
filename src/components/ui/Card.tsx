import styled from 'styled-components'
import { theme } from './theme'

export const Card = styled.div`
	color: ${theme.text_primary};
	background: ${theme.bg_secondary};
	width: 100%;
	margin: 0 0 15px 0;
	border: 1px solid ${theme.bg_border_lazy};
	border-radius: 2px;
	display: grid;
	grid-template-columns: 1fr 11fr;
	cursor: pointer;
	transition: 0.1s;

	&:hover {
		transition: 0.1s;
		border-color: ${theme.bg_border_active};
	}
`
