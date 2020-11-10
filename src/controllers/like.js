import { pool } from '../config/db.config';

export const create = async (req, res) => {
    if (!req.body.username) {
        res.status(400).send({ message: "Missing body content!" });
        return;
    }

    const tweetId = req.params.id;

    try {
        const client = await pool.connect();

        const sql = 'INSERT INTO likes (tweetId, username) VALUES ($1, $2) RETURNING *';
        const values = [tweetId, req.body.username];
        const { rows } = await client.query(sql, values);
        
        client.release();

        res.send(rows);
    } catch (error) {
        res.status(400).send(error);
    }
};
