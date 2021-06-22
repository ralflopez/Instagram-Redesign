INSERT INTO users (
    username,
    email,
    display_name,
    password
) VALUES (
    'test',
    'test@gmail.com',
    'test account',
    'hashedpass'  
);

INSERT INTO stories (
    user_id,
    path
) VALUES (
    1,
    'stories url'
);

INSERT INTO posts (
    user_id,
    caption
) VALUES (
    1,
    'first post'
);

INSERT INTO uploads (
    post_id,
    path
) VALUES (
    1,
    'photo url'
);

INSERT INTO favorites (
    post_id,
    user_id
) VALUES (
    1,
    1
);

INSERT INTO likes (
    user_id,
    post_id
) VALUES (
    1,
    1
);

INSERT INTO comments (
    user_id,
    post_id,
    comment
) VALUES (
    1,
    1,
    'thanks'
);

INSERT INTO replies (
    target_id,
    reply_id
) VALUES (
    1,
    2
);