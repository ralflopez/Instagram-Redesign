import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Sidebar from '../components/Sidebar/Index'
import { getUser } from '../features/userSlice'
import { initializeStore, removeUndefined } from '../app/store'
import { getSessionEmail } from '../lib/next-auth/getSessionEmail'
import { TUser } from '../lib/pg/types'

interface Props {
	initialReduxState: any
	user: TUser
}

export default function Home({ initialReduxState }: Props) {
	return (
		<main className="container-fluid p-0">
			{/* <p>{JSON.stringify(user)}</p> */}
			<div className="row fullscreen m-0">
				<div className="d-none d-lg-block col-md-3 bg-primary p-0">
					<Sidebar />
				</div>
				<div className="col-lg-9"></div>
			</div>
		</main>
	)
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const [email] = await getSessionEmail(context)
	if (!email) {
		return {
			props: {},
			redirect: { destination: '/auth/signin', permanent: false },
		}
	}

	const store = initializeStore()
	await store.dispatch(getUser(email))
	const state = store.getState()

	return {
		props: {
			initialReduxState: removeUndefined(store.getState()),
		},
		redirect:
			!state.loading && state.error
				? { destination: '/auth/signin', permanent: false }
				: undefined,
	}
}
