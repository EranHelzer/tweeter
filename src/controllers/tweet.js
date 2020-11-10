const { pool } = require('../config/db');

const create = async (req, res) => {
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

const findAll = async (req, res) => {
    try {
        const client = await pool.connect();

        const sql = 'SELECT id, content, username, create_date as timestamp, coalesce(li.count, 0) as likes_count, coalesce(re.count, 0) as retweet_count \
            FROM tweets tw \
            LEFT JOIN (SELECT tweet_id, COUNT(*) FROM likes GROUP BY tweet_id) li ON tw.id = li.tweet_id \
            LEFT JOIN (SELECT tweet_id, COUNT(*) FROM retweets GROUP BY tweet_id) re ON tw.id = re.tweet_id';
        const { rows } = await client.query(sql);
        
        client.release();

        res.send(rows);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    create,
    findAll
}
