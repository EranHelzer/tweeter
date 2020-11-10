DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS retweet;
DROP TABLE IF EXISTS tweets;

CREATE TABLE tweets (
    id SERIAL PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    createDate TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    tweetId INT,
    username VARCHAR(255) NOT NULL,
    createDate TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_tweet FOREIGN KEY(tweetId) REFERENCES tweets(id)
);

CREATE TABLE retweet (
    id SERIAL PRIMARY KEY,
    tweetId INT,
    username VARCHAR(255) NOT NULL,
    createDate TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_tweet FOREIGN KEY(tweetId) REFERENCES tweets(id)
);