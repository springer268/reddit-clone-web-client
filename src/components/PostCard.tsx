import Link from 'next/link'
import styled from 'styled-components'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Post } from '../models'
import { Card } from './ui'
import { theme } from './ui/theme'

// CSS

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 11fr;
`

const KarmaArea = styled.div`
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
`

const Body = styled.div`
	background: ${theme.bg_secondary};
	padding: 10px 15px;
	font-weight: 700;
	display: flex;
	flex-direction: column;

	ul {
		list-style: none;
		display: flex;
	}
`

const HeadInfo = styled.ul`
	margin-bottom: 5px;

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
`

const CommunityName = styled.a`
	font-weight: 400;
	color: ${theme.text_primary};
	font-size: 16px;
`

const FootInfo = styled.ul`
	margin: auto 0 0 0;
`

const SubtleItem = styled.li`
	font-weight: 100;
	font-size: 14px;
	margin: auto 5px auto 0;

	a {
		color: ${theme.text_secondary};

		&:hover {
			text-decoration: underline;
		}
	}
`

const Title = styled.p`
	font-size: 18px;
`

const Content = styled.p`
	font-size: 12;
	font-weight: 100;
	margin-bottom: 5px;
`

// COMPONENT

interface Props {
	post: Required<Post>
}

export const PostCard: React.FC<Props> = ({ post }) => {
	return (
		<Link href={`/post/${post.id}`}>
			<Card hoverEffect>
				<Grid>
					<KarmaArea>
						<ul>
							<li>
								<FontAwesomeIcon icon={faArrowUp} />
							</li>
							<li>
								{post.upvotes >= 1000
									? `${Math.floor(post.upvotes / 100) / 10}k`
									: post.upvotes.toString()}
							</li>
							<li>
								<FontAwesomeIcon icon={faArrowDown} />
							</li>
						</ul>
					</KarmaArea>
					<Body>
						<HeadInfo>
							<li>
								{' '}
								<Link href={`/community/${post.community.name}`}>
									<CommunityName>r/{post.community.name}</CommunityName>
								</Link>
							</li>
							<li>
								posted by{' '}
								<Link href={`/user/${post.author.name}`}>
									<a>u/{post.author?.name}</a>
								</Link>
							</li>
							<li>{new Date().getHours().toString()}</li>
						</HeadInfo>
						<Title>{post.title}</Title>
						<Content>{post.content}</Content>
						<FootInfo>
							<SubtleItem>
								<a href='#'>{2} Comments</a>
							</SubtleItem>
							<SubtleItem>
								<a href='#'>Give Award</a>
							</SubtleItem>
							<SubtleItem>
								<a href='#'>Share</a>
							</SubtleItem>
							<SubtleItem>
								<a href='#'>More</a>
							</SubtleItem>
						</FootInfo>
					</Body>
				</Grid>
			</Card>
		</Link>
	)
}
