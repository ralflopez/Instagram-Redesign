import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Sidebar from '../components/Sidebar/Parent'

export default function Home({ user }: any) {
	return (
		<div className="container-fluid p-0">
			<div className="row fullscreen m-0">
				<div className="d-none d-lg-block col-md-3 bg-primary p-0">
					<Sidebar />
				</div>
				<div className="col-lg-9"></div>
			</div>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	// const user = await AUTH_SESSION(context)

	return {
		props: {
			user: null,
		},
	}
}
