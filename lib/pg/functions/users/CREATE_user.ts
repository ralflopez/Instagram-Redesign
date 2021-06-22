import { pool } from "../../dbconfig";
import { TSignUpCredentials } from "../../types";
import { AUTH_USER } from './index'

export default async function CREATE_USER(credentials: TSignUpCredentials) {
    try {
        const client = await pool.connect()
        const { username, email, displayName, hashedPass, password } = credentials
        await client.query(`
            INSERT INTO users (
                username,
                email,
                display_name,
                password
            ) VALUES (
                $1,
                $2,
                $3,
                $4  
        );`, [username, email, displayName, hashedPass])
        client.release()

        // get info
        const user = await AUTH_USER({ username, password })

        return user

    } catch(err) {
        console.log(err)
    }

    return null
}