const { db } = require('../config/db');

const create = async (req, res) => {
    const { content, username } = req.body;

    try {
        const tweet = await db
            .insert({ content, username })
            .into('tweets').returning('*');

        res.send(tweet);
    } catch (error) {
        res.status(400).send(new Error(error));
    }
};

const findAll = async (req, res) => {
    try {
        const likes = db
            .select('tweet_id', db.raw('COUNT(*)'))
            .from('likes').groupBy('tweet_id').as('li');
        const retweets = db
            .select('tweet_id', db.raw('COUNT(*)'))
            .from('retweets').groupBy('tweet_id').as('re');

        const coalesceLikes = db.raw('COALESCE(li.count, 0) AS likes_count');
        const coalesceRetweets = db.raw('COALESCE(re.count, 0) AS retweets_count');

        const tweets = await db
            .select('id', 'content', 'username', 'create_date as timestamp', coalesceLikes, coalesceRetweets)
            .from({ tw: 'tweets' })
            .leftJoin(likes, 'li.tweet_id', '=', 'tw.id')
            .leftJoin(retweets, 're.tweet_id', '=', 'tw.id');

        res.send(tweets);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    create,
    findAll
}
