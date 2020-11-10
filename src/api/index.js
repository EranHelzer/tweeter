import { Router } from 'express';
import like from './routes/like';
import retweet from './routes/retweet';
import tweet from './routes/tweet';

export default () => {
	const app = Router();
	like(app);
	retweet(app);
	tweet(app);

	return app;
}