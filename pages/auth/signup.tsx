import React, { useState } from 'react'
import { signIn, getSession } from 'next-auth/client'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import axios from 'axios'

// sign up client

export default function SignUp() {
	const [username, setUsername] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [displayName, setDisplayName] = useState<string>('')

	const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await axios.post('/api/auth-method/signup', {
				username,
				email,
				password,
				displayName,
			})
			signIn('username-and-password', {
				username,
				password,
			})
		} catch (err) {
			setUsername('')
			setEmail('')
			setPassword('')
			setDisplayName('')
		}
	}

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDisplayName(e.target.value)
	}

	return (
		<div>
			<h1>Sign Up</h1>
			<form method="post" onSubmit={handleSignUp}>
				<input
					type="text"
					placeholder="Email"
					value={email}
					onChange={handleEmail}
				/>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={handleUsername}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={handlePassword}
				/>
				<input
					type="text"
					placeholder="Dislpay Name"
					value={displayName}
					onChange={handlDisplayName}
				/>
				<input type="submit" />
			</form>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const token = await getSession(context)

	// redirect if token exist
	return {
		props: {},
		redirect: !!token ? { destination: '/', permanant: false } : undefined,
	}
}
