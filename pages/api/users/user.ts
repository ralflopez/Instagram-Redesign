import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { PoolClient } from "pg";
import { pool } from "../../../lib/pg/dbconfig";
import { GET_USER } from '../../../lib/pg/functions/users'

const route: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email } = req.query
        const client: PoolClient = await pool.connect()
        const query = await client.query(`
            SELECT id, users.username, users.email, users.photo_url, users.display_name,
            a.followers, b.following 
            FROM (
                SELECT follows.to_user, COUNT(follows.from_user) AS followers 
                FROM follows
                GROUP BY follows.to_user
            ) a 
            INNER JOIN users 
            ON a.to_user = users.id
            INNER JOIN (
                SELECT follows.from_user, COUNT(follows.to_user) AS following
                FROM follows
                GROUP BY follows.from_user
            ) b 
            ON b.from_user = users.id
            where email = $1;`,
            [email]
        )
        const data = query.rows[0]
        client.release()
        res.status(200).send(data)
    } catch(err) {
        res.status(500).send(err)
    }
}

export default route