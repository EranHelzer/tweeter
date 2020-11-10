const { Router } = require('express');
const like = require('./routes/like');
const retweet = require('./routes/retweet');
const tweet = require('./routes/tweet');

module.exports = () => {
	const app = Router();
	like(app);
	retweet(app);
	tweet(app);

	return app;
}