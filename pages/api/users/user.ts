import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { PoolClient } from "pg";
import { pool } from "../../../lib/pg/dbconfig";
import { GET_USER } from '../../../lib/pg/functions/users'

const route: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log('route')
        const { email } = req.query
        console.log(email)
        const client: PoolClient = await pool.connect()
        const query = await client.query(`
            SELECT id, email, photo_url, display_name, COUNT(from_user.from_user) AS following
            FROM users 
            JOIN follows AS from_user ON users.id = from_user.from_user 
            WHERE users.email = 'first@gmail.com'
            GROUP BY from_user.from_user;`,
            [email]
        )
        console.log('query')
        console.log(query.rows)
        const data = query.rows[0]
        console.log('data')
        console.log(data)
        client.release()
        res.status(200).send(data)
    } catch(err) {
        res.status(500).send(err)
    }
}

export default route