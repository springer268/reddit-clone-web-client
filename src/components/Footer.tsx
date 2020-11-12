import styled from 'styled-components'
import { Card } from 'ui'

const FooterUI = styled(Card)`
	margin: 0;
	height: 125px;
	border-radius: 0;
	border-left: none;
	border-right: none;
	border-bottom: none;
	position: absolute;
	bottom: 0;
	width: 100%;
`

export const Footer = () => {
	return <FooterUI></FooterUI>
}
