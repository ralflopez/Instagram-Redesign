import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Sidebar from '../components/Sidebar/Sidebar'
import { getUser } from '../features/userSlice'
import { initializeStore, removeUndefined } from '../app/store'
import { getSessionEmail } from '../lib/next-auth/getSessionEmail'
import { TUser } from '../lib/pg/types'
import LikesPage from '../components/Likes/Likes'

interface Props {
	initialReduxState: any
	user: TUser
}

export default function Likes({ initialReduxState }: Props) {
	return (
		<main className="container-fluid p-0">
			<div className="row fullscreen m-0 position-relative">
				<div className="full-height col-md-3 p-0 position-absolute position-md-static">
					<Sidebar />
				</div>
				<div className="full-height col-md-9 mx-auto overflow-auto">
					<div className="mx-auto" style={{ width: '80%' }}>
						<LikesPage />
					</div>
				</div>
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
