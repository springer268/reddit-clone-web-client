import Router from 'next/router'
import { Formik } from 'formik'
import { Card, Header, CardWrapper, Input, Button, ErrorMessage } from './ui'
import { ShallowCommunity, ShallowUser } from '../models'
import { useAddPostMutation } from 'generated'

interface Props {
	community: ShallowCommunity
	self: ShallowUser
}

export const AddPostCard: React.FC<Props> = ({ community, self: user }) => {
	const [addPost] = useAddPostMutation()

	return (
		<Card>
			<CardWrapper>
				<Header>Post to {community.name}!</Header>
				<Formik
					initialValues={{ title: '', content: '' }}
					validate={values => {
						const errors: {
							title?: string
							content?: string
						} = {}

						if (values.content.length === 0) errors.content = 'Content must not be empty'

						return errors
					}}
					onSubmit={async values => {
						await addPost({
							variables: {
								title: values.title,
								content: values.content,
								authorID: user.id,
								communityID: community.id
							}
						})
						Router.reload()
					}}
				>
					{({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
						<form onSubmit={handleSubmit}>
							<label>Title</label>
							<Input type='text' name='title' onChange={handleChange} value={values.title} />
							<ErrorMessage>{errors.title}</ErrorMessage>
							<label>Content</label>
							<Input type='text' name='content' onChange={handleChange} value={values.content} />
							<ErrorMessage>{errors.content}</ErrorMessage>
							<Button type='submit' disabled={isSubmitting}>
								Submit
							</Button>
						</form>
					)}
				</Formik>
			</CardWrapper>
		</Card>
	)
}
