import React, { useState } from 'react'
import { signIn, getSession } from 'next-auth/client'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { Session } from 'next-auth'
import axios from 'axios'
import Image from 'next/image'
import styles from '../../styles/auth.module.scss'
import logoSvg from '../../assets/icons/logo.svg'
import Link from 'next/link'

// sign up client

export default function SignUp() {
	const [username, setUsername] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [displayName, setDisplayName] = useState<string>('')
	const [isSigning, setIsSigning] = useState<boolean>(false)

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
		<div
			className={`${styles.fullscreen} bg-gradient-1 d-flex justify-content-center align-items-center p-md-5`}
		>
			<div className={`${styles.loginCard} bg-white d-flex flex-column p-5`}>
				<div className="mb-4 d-flex justify-content-between align-items-center mt-3">
					<h2 className="mb-4 font-bold">Sign Up</h2>
					<Image src={logoSvg} height={50} alt="umm" />
				</div>
				<form method="post" onSubmit={handleSignUp} className="mb-5">
					<div className="mb-4">
						<label className="form-label mb-3 font-weight-boler">Name</label>
						<input
							className="form-control d-block mx-auto w-100 px-3"
							type="text"
							value={displayName}
							onChange={handlDisplayName}
						/>
					</div>
					<div className="mb-4">
						<label className="form-label mb-3 font-weight-boler">
							Username
						</label>
						<input
							className="form-control d-block mx-auto w-100 px-3"
							type="text"
							value={username}
							onChange={handleUsername}
						/>
					</div>
					<div className="mb-4">
						<label className="form-label mb-3 font-weight-boler">Email</label>
						<input
							className="form-control d-block mx-auto w-100 px-3"
							type="text"
							value={email}
							onChange={handleEmail}
						/>
					</div>
					<div className="mb-4">
						<label className="form-label mb-3">Password</label>
						<input
							className="form-control d-block mx-auto w-100 mb-2 px-3"
							type="password"
							value={password}
							onChange={handlePassword}
						/>
						<p className="text-secondary">Forgot Password?</p>
					</div>
					{isSigning ? (
						<div className="text-center">
							<div className="spinner-border text-secondary" role="status">
								<span className="sr-only"></span>
							</div>
						</div>
					) : (
						<>
							<button
								type="submit"
								className="btn btn-primary text-white w-100 mt-2 mb-3"
							>
								Sign Up
							</button>
							<div className="text-center">
								<Link href="/auth/signin">
									<a>Sign in instead</a>
								</Link>
							</div>
						</>
					)}
				</form>
			</div>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const session: Session | null = await getSession(context)

	// redirect if token exist
	return {
		props: {},
		redirect: !!session ? { destination: '/', permanant: false } : undefined,
	}
}
