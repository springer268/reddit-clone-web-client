import Router from 'next/router'
import { Card, Input, ErrorMessage, Button, CardWrapper, Header } from './ui'
import { Formik } from 'formik'
import { User } from '../models'

interface Props {}

export const LoginCard: React.FC<Props> = ({}) => {
	return (
		<Card>
			<CardWrapper>
				<Header>Login</Header>
				<Formik
					initialValues={{ username: '', password: '' }}
					validate={_values => {
						const errors: {
							username?: string
							password?: string
						} = {}

						return errors
					}}
					onSubmit={async values => {
						try {
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
								Login
							</Button>
						</form>
					)}
				</Formik>
			</CardWrapper>
		</Card>
	)
}
