import { GetServerSidePropsContext } from "next"
import { getSession } from "next-auth/client"
import { Session } from 'next-auth'
import { TUser } from '../../types'
import { GET_USER } from './index'

export default async function AUTH_SESSION(context: GetServerSidePropsContext) {
    let user: TUser | null = null
    try {
		const session: Session | null= await getSession(context)
		user = await GET_USER(['email'], [`${session?.user?.email}`])
	} catch (er) {
		console.log(er)
	}

    return user
}