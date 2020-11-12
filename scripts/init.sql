DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS retweet;
DROP TABLE IF EXISTS tweets;

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    create_date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    tweet_id INT,
    username VARCHAR(255) NOT NULL,
    create_date TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_tweet FOREIGN KEY(tweet_id) REFERENCES tweets(id)
);

CREATE TABLE retweets (
    id SERIAL PRIMARY KEY,
    tweet_id INT,
    username VARCHAR(255) NOT NULL,
    create_date TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_tweet FOREIGN KEY(tweet_id) REFERENCES tweets(id)
);