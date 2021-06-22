DROP TABLE IF EXISTS
users,
stories,
posts,
uploads,
favorites,
likes,
comments,
replies;

CREATE TABLE users (
    id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(255),
    photo_url VARCHAR(255) DEFAULT '',
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE follows (
    from_user BIGINT NOT NULL,
    FOREIGN KEY(from_user) REFERENCES users(id),
    to_user BIGINT NOT NULL,
    FOREIGN KEY(to_user) REFERENCES users(id)
);

CREATE TABLE stories (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    path VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE posts (
    id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    caption TEXT DEFAULT '',
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    likes BIGINT DEFAULT 0
);

CREATE TABLE uploads (
    id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    post_id BIGINT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    path VARCHAR(255) NOT NULL 
);

CREATE TABLE favorites (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    post_id BIGINT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes (
    id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id BIGINT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id BIGINT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    comment TEXT NOT NULL,
    likes INT NOT NULL DEFAULT 0
);

CREATE TABLE replies (
    target_id BIGSERIAL  NOT NULL,
    FOREIGN KEY (target_id) REFERENCES comments(id),
    reply_id BIGSERIAL  NOT NULL,
    FOREIGN KEY (reply_id) REFERENCES comments(id )
);
