import styled from 'styled-components'
import { Card } from './ui'
import { Formik } from 'formik'
import { User } from '../models'

const themes = {
	blue: 'linear-gradient(-135deg, #02e6ee, #1f3cce)',
	purple: 'linear-gradient(-135deg, #c850c0, #4158d0)',
	red: 'linear-gradient(-135deg, #f45c43, #eb3349)'
}

const Style = styled.div`
	padding: 10px 15px 10px 15px;

	label {
	}

	input {
		border-radius: 2px;
		outline: none;
		border: none;
		width: 100%;
		padding: 5px 5px 5px 15px;
		margin: 10px 0;
		font-size: 15px;
	}

	button {
		margin-top: 5px;
		font-size: 16px;
		width: 100%;
		height: 35px;
		background: ${themes.purple};
		outline: none;
		color: #fff;
		font-weight: 500;
		cursor: pointer;
		border: none;
	}

	p {
		color: #ff0033;
		margin-bottom: 5px;
	}
`

interface Props {}

export const LoginCard: React.FC<Props> = ({}) => {
	return (
		<Card>
			<Style>
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
							const user = await User.attemptLogin(values.username, values.password)
							alert(user?.name)
						} catch (error) {
							alert(error)
						}
					}}
				>
					{({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
						<form onSubmit={handleSubmit}>
							<label>Username</label>
							<input type='text' name='username' onChange={handleChange} value={values.username} />
							<p>{errors.username}</p>
							<label>Password</label>
							<input type='password' name='password' onChange={handleChange} value={values.password} />
							<p>{errors.password}</p>
							<button type='submit' disabled={isSubmitting}>
								Login
							</button>
						</form>
					)}
				</Formik>
			</Style>
		</Card>
	)
}
