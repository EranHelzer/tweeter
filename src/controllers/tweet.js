import { pool } from '../config/db';

export const create = async (req, res) => {
    if (!req.body.content || !req.body.username) {
        res.status(400).send({ message: "Missing body content!" });
        return;
    }

    try {
        const client = await pool.connect();

        const sql = 'INSERT INTO tweets (content, username) VALUES ($1, $2) RETURNING *';
        const values = [req.body.content, req.body.username];
        const { rows } = await client.query(sql, values);
        
        client.release();

        res.send(rows);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const findAll = (req, res) => {
    try {
        const client = await pool.connect();

        const sql = 'SELECT id, content, username, create_date as timestamp, li.count as likes_count, re.count as retweet_count \
            FROM tweets tw \
            JOIN (SELECT tweet_id, COUNT(*) FROM likes GROUP BY tweet_id) li ON tw.id = li.tweet_id \
            JOIN (SELECT tweet_id, COUNT(*) FROM retweets GROUP BY tweet_id) re ON tw.id = re.tweet_id';
        const { rows } = await client.query(sql);
        
        client.release();

        res.send(rows);
    } catch (error) {
        res.status(400).send(error);
    }
};