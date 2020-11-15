const { db } = require('../config/db');

const create = async (req, res) => {
    const tweetId = req.params.id;
    const { username } = req.body;

    try {
        const retweet = await db
            .insert({ tweet_id: tweetId, username })
            .into('retweets').returning('*');

        res.send(retweet);
    } catch (error) {
        res.status(400).send(error);
    }
};

const findAll = async (req, res) => {
    try {
        const retweets = await db
            .select({
                content: 'tw.content',
                retweet_user: 're.username',
                tweet_id: 're.tweet_id',
                tweet_user: 'tw.username',
                timestamp: 're.create_date'
            })
            .from({ re: 'retweets' })
            .leftJoin({ tw: 'tweets' }, 're.tweet_id', '=', 'tw.id');

        res.send(retweets);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    create,
    findAll
}
