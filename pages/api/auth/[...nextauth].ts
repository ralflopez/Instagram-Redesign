import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { AUTH_USER } from '../../../database/functions/users/AUTH_user'
import { TSignInCredentials } from '../../../database/types'
const { Credentials } = Providers

const credentialsProvider = Credentials({
    id: 'username-and-password',
    name: 'Username',
    credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' }
    },
    async authorize (credentials: TSignInCredentials) {
        const user: any = await AUTH_USER(credentials)
        return user
    },
})

const options: NextAuthOptions = {
    providers: [ credentialsProvider ],
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async signIn(user) {
            if (user) {
                return true
            } else {
                return false
            }
        },
        async redirect(_, baseUrl) {
            return baseUrl
        }
    },
    pages: {
        signIn: '/auth/signin',
        newUser: '/auth/signup',
        error: '/auth/signin'
    }
}

const response = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
export default response