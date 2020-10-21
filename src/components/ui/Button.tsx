import styled from 'styled-components'
import { theme } from './theme'

export const Button = styled.button`
	margin-top: 5px;
	font-size: 16px;
	width: 100%;
	height: 35px;
	background: ${theme.gradients.purple};
	outline: none;
	color: #fff;
	font-weight: 500;
	cursor: pointer;
	border: none;
`
