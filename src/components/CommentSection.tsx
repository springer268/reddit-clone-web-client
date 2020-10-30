import { GetPostWithCommentsByIdQuery } from 'gql'
import { PostWithComments } from 'models/Post'

interface Props {
	post: PostWithComments
}

export const CommentSection: React.FC<Props> = ({ post }) => {
	return <></>
}
