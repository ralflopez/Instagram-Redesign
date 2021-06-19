import { QueryResult } from "pg"
import { pool } from "../../dbconfig"
import { TSignInCredentials, TUser } from "../../types"
import bcrpyt from 'bcrypt'

export const AUTH_USER = async ({ username, password }: TSignInCredentials) => {
    let user: TUser | null = null
    try {
        const client = await pool.connect()
        // get password
        const res: QueryResult<any> = await client.query(
            'SELECT password FROM users WHERE username = $1',
            [username]
        )

        // validate
        const passwordFromDb: string = res.rows[0]?.password
        const valid: boolean = await bcrpyt.compare(password, passwordFromDb)

        if(!valid) return null

        // get info
        const { rows }: QueryResult<any> = await client.query(
            'SELECT id, username, display_name, email FROM users WHERE username = $1',
            [username]
        )
        user = rows[0]
        client.release()
    } catch(err) {
        console.log(err)
    }

    return user
}