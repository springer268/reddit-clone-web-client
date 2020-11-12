import { PostWithComments, Comment, CommentWithParent } from 'models'
import { Card, Header, theme } from 'ui'
import { useSelf } from 'hooks'
import styled from 'styled-components'

const UI = styled(Card)`
	margin-top: 15px;
	padding: 10px;

	${Header} {
		font-size: 24px;
		padding-top: 0;
	}

	textarea {
		width: 100%;
		height: 150px;
		background: ${theme.bg_secondary};
		outline: none;
		border: solid 1px ${theme.bg_border_lazy};
		color: #fff;
		padding: 10px;
		resize: none;
	}
`

interface Props {
	post: PostWithComments
}

export const CommentSection: React.FC<Props> = ({ post }) => {
	const { self } = useSelf()

	return self ? (
		<UI>
			<Header>Comment as {self.name}</Header>
			<textarea />
			<div>
				{post.comments.map(comment => {
					return (
						<p
							style={{ marginLeft: `${getPaddingLeftAmount(post.comments, comment.id)}px` }}
							key={comment.id}
						>
							{comment.content}
						</p>
					)
				})}
			</div>
		</UI>
	) : (
		<></>
	)
}
