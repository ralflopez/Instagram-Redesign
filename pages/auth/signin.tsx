import React, { useState } from 'react'
import { useSession, signIn, getSession } from 'next-auth/client'
import {
	GetServerSideProps,
	GetServerSidePropsContext,
	NextApiRequest,
} from 'next'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'

interface Props {
	error: boolean
}

export default function SignIn({ error }: Props) {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		signIn('username-and-password', {
			username,
			password,
		})
	}

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	return (
		<div>
			<h1>Sign In</h1>
			{error && <p>Invalid Credentials</p>}
			<form method="post" onSubmit={handleSignIn}>
				<input
					type="text"
					placeholder="username"
					value={username}
					onChange={handleUsername}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={handlePassword}
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
	const error: boolean = !!context.params?.error

	// redirect if token exist
	return {
		props: {
			error,
		},
		redirect: !!token ? { destination: '/', permanant: false } : undefined,
	}
}
