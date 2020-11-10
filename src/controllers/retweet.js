import { pool } from '../config/db.config';

export const create = async (req, res) => {
    if (!req.body.username) {
        res.status(400).send({ message: "Missing body content!" });
        return;
    }

    const tweetId = req.params.id;

    try {
        const client = await pool.connect();

        const sql = 'INSERT INTO retweets (tweetId, username) VALUES ($1, $2) RETURNING *';
        const values = [tweetId, req.body.username];
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

        const sql = 'SELECT tw.content, re.username retweet_user, re.tweet_id, tw.username as tweet_user, re.create_date as timestamp \
            FROM retweets re JOIN tweets tw ON re.tweet_id = tw.id';
        const { rows } = await client.query(sql);
        
        client.release();

        res.send(rows);
    } catch (error) {
        res.status(400).send(error);
    }
};
