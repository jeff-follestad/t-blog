const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Interesting!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "That's different..."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Nice work!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Unreal!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "I'm not that impressed."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is YUGE!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Love it!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;