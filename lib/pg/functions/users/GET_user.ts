import { QueryResult } from "pg";
import { pool } from "../../dbconfig";

export default async function GET_USER(fields: string[], values: string[] | null | undefined) {
    if (!values) return null
    try {
        const client = await pool.connect()
        const res: QueryResult = await client.query(
            `SELECT id, username, display_name, email, photo_url
            FROM users 
            WHERE ${fields.map((field: string, index: number) => `${field} = $${index + 1} `).join('')};`,
            values
        )
        client.release()
        return res.rows[0]
    } catch(err) {
        console.log(err)
    }

    return null
}