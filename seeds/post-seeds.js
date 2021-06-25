const { Post } = require('../models');

const postData = [
    {
        title: "Berkeley Bootcamp!",
        post_content: "Berekely student creates the next Instagram!",
        user_id: 3
    },
    {
        title: "T-Blog reaches 1 million subscribers!",
        post_content: "And they don't appear to be slowing down! Anyone who's anyone reads it daily.",
        user_id: 1
    },
    {
        title: "Robot Gladiators acquired by Epic Games!",
        post_content: "Even the most cynical critics agree: Robot Gladiators is the new Fortnite.",
        user_id: 2

    },
    {
        title: "T-Blog 2.0 Launch!",
        post_content: "Great new interface. As always, developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Run-Buddy goes public!",
        post_content: "Run-Buddy, the disruptive online show retailer, has become the world's largest Nike reseller.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
