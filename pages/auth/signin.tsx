import React, { useState } from 'react'
import styles from '../../styles/auth.module.scss'
import { signIn, getSession } from 'next-auth/client'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import logoSvg from '../../assets/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	error: boolean
}

export default function SignIn({ error }: Props) {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [isSigning, setIsSigning] = useState<boolean>(false)

	const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSigning(true)
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
		<div
			className={`${styles.loginBg} ${styles.fullscreen} d-flex justify-content-center align-items-center p-md-5`}
		>
			<div className={`${styles.loginCard} d-flex flex-column p-5`}>
				<div className="mb-4 d-flex justify-content-between align-items-center mt-3">
					<h2 className="mb-4 font-bold">Sign In</h2>
					<Image src={logoSvg} height={50} alt="umm" />
				</div>
				{error && (
					<div className="alert alert-danger" role="alert">
						Invalid Credentials
					</div>
				)}
				<form method="post" onSubmit={handleSignIn} className="mb-5">
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
								Sign In
							</button>
							<div className="text-center">
								<Link href="/auth/signup">
									<a>Create an account</a>
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
	const token = await getSession(context)
	const error: boolean = !!context.query.error

	// redirect if token exist
	return {
		props: {
			error,
		},
		redirect: !!token ? { destination: '/', permanant: false } : undefined,
	}
}
