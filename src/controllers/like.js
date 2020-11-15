const { db } = require('../config/db');

const create = async (req, res) => {
    const tweetId = req.params.id;
    const { username } = req.body;

    try {
        const like = await db
            .insert({ tweet_id: tweetId, username })
            .into('likes').returning('*');

        res.send(like);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    create
}
