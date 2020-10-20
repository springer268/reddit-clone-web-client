import styled from 'styled-components'
import { theme } from './theme'

export const Card = styled.div<{ hoverEffect?: true }>`
	color: ${theme.text_primary};
	background: ${theme.bg_secondary};
	width: 100%;
	margin: 0 0 15px 0;
	border: 1px solid ${theme.bg_border_lazy};
	border-radius: 2px;
	transition: 0.1s;

	&:hover {
		transition: 0.1s;
		cursor: ${props => (props.hoverEffect ? 'pointer' : 'default')};
		border-color: ${props => (props.hoverEffect ? theme.bg_border_active : theme.bg_border_lazy)};
	}
`
