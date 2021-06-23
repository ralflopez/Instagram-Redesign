import axios, { AxiosResponse } from "axios"
import { GetServerSidePropsContext } from "next"
import { Session } from "next-auth"
import { getSession } from "next-auth/client"

export const getSessionEmail = async (context: GetServerSidePropsContext) => {
    try {
        const session: Session | null = await getSession(context)
        const email = session?.user?.email

        return [email, null]
    } catch(err) {
        return [null, err]
    }
}