import styled from 'styled-components'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { User, Community } from 'entities'
import { theme } from './ui/theme'

namespace CardUI {
	export const Wrapper = styled.div`
		background: ${theme.bg_primary};
	`

	export const Base = styled.div`
		color: ${theme.text_primary};
		background: ${theme.bg_secondary};
		width: 100%;
		margin: 10px 0 15px 0;
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

		div:nth-of-type(1) {
			background: ${theme.bg_card_secondary};
			padding: 10px 0;
			display: flex;

			ul {
				display: flex;
				flex-direction: column;
				list-style: none;
				margin: auto auto;

				li {
					margin: auto auto;

					margin-bottom: 5px;

					&:nth-of-type(1) {
						&:hover {
							color: ${theme.red};
						}
					}

					&:nth-of-type(3) {
						&:hover {
							color: ${theme.blue};
						}
					}
				}
			}

			p {
				margin: 0 auto;
			}
		}

		div:nth-of-type(2) {
			background: ${theme.bg_secondary};
			padding: 10px;
			font-weight: 700;
			display: flex;
			flex-direction: column;

			ul {
				list-style: none;
				display: flex;
			}
		}
	`

	export const Header = styled.ul`
		margin-bottom: 10px;

		li {
			font-weight: 100;
			font-size: 14px;
			color: ${theme.text_secondary};
			margin: auto 5px auto 0;

			a {
				color: ${theme.text_primary};
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}

		li:first-of-type {
			font-weight: 500;
			color: ${theme.text_primary};
			font-size: 16px;
		}
	`

	export const Footer = styled.ul`
		margin: auto 0 0 0;

		li {
			font-weight: 100;
			font-size: 14px;
			color: ${theme.text_secondary};
			margin: auto 5px auto 0;

			a {
				text-decoration: none;
				color: ${theme.text_secondary};

				&:hover {
					text-decoration: underline;
				}
			}
		}
	`

	export const Body = styled.p`
		font-size: 18px;
		margin-bottom: 10px;
	`
}

interface Props {
	info: {
		communityName: Community['name']
		username: User['name']
		body: string
		numComments: number
	}
}

export const Card = ({ info: { body, communityName, username, numComments } }: Props) => {
	return (
		<CardUI.Wrapper>
			<CardUI.Base>
				<div className='card-aside'>
					<ul>
						<li>
							<FontAwesomeIcon icon={faArrowUp} />
						</li>
						<li>50</li>
						<li>
							<FontAwesomeIcon icon={faArrowDown} />
						</li>
					</ul>
				</div>
				<div>
					<CardUI.Header>
						<li>
							<a href='#'>r/{communityName}</a>
						</li>
						<li>
							posted by <a href='#'>u/{username}</a>
						</li>
						<li>1 hour ago</li>
					</CardUI.Header>
					<CardUI.Body>{body}</CardUI.Body>
					<CardUI.Footer>
						<li>
							<a href='#'>{numComments} Comments</a>
						</li>
						<li>
							<a href='#'>Give Award</a>
						</li>
						<li>
							<a href='#'>Share</a>
						</li>
						<li>
							<a href='#'>More</a>
						</li>
					</CardUI.Footer>
				</div>
			</CardUI.Base>
		</CardUI.Wrapper>
	)
}
