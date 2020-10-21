import { Card, CardWrapper, ErrorMessage, Input, Button, Header } from './ui'
import { Formik } from 'formik'
import { User } from '../models'
import Router from 'next/router'

interface Props {}

export const SignupCard: React.FC<Props> = ({}) => {
	return (
		<Card>
			<CardWrapper>
				<Header>Signup</Header>
				<Formik
					initialValues={{ username: '', password: '' }}
					validate={values => {
						const errors: {
							username?: string
							password?: string
						} = {}

						if (values.username.length === 0) errors.username = 'Username cannot be empty'
						else if (values.username.length === 0) errors.username = 'Username cannot be empty'

						if (values.password.length === 0) errors.password = 'Password cannot be empty'
						else if (values.password.length < 8)
							errors.password = 'Password must be at least 8 characters long'

						return errors
					}}
					onSubmit={async values => {
						try {
							await User.createFromNameAndPassword(values.username, values.password)
							await User.attemptLogin(values.username, values.password)
							Router.reload()
						} catch (error) {
							alert(error)
						}
					}}
				>
					{({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
						<form onSubmit={handleSubmit}>
							<label>Username</label>
							<Input type='text' name='username' onChange={handleChange} value={values.username} />
							<ErrorMessage>{errors.username}</ErrorMessage>
							<label>Password</label>
							<Input type='password' name='password' onChange={handleChange} value={values.password} />
							<ErrorMessage>{errors.password}</ErrorMessage>
							<Button type='submit' disabled={isSubmitting}>
								Signup
							</Button>
						</form>
					)}
				</Formik>
			</CardWrapper>
		</Card>
	)
}
