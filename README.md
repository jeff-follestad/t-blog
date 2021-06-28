# T.blog

## User Story

T.blog was designed by a developer who writes about tech. T.blog is a CMS-style blog site to publish articles, blog posts, thoughts, and opinions.

When a user visits the t.blog site for the first time, they are presented with the homepage. The homepage includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in.

When users click on the homepage option they are taken to the homepage. Clicking on any other links in the navigation will prompt the user either sign up or sign in.

New users will be prompted to create a username and password. When they click on the sign-up button, their user credentials are saved and they are logged into the site.

When users revisit the site at a later time and choose to sign in, they are prompted to enter username and password. After signing in to the site the user is presented navigation links for the homepage, the dashboard, and the option to log out.

Clicking on the homepage option in the navigation takes the user back to the homepage and they are presented with existing blog posts that include the post title and the date created.

If a user clicks on an existing blog post they can see the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

When logged in, a user comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created.

The dashboard button in navigation points to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

Clicking on the button to add a new blog post prompts the user to enter both a title and contents for the blog post.

Clicking on the button to create a new blog post saves the title and contents of the post; the user is taken back to an updated dashboard with my new blog post.

Clicking on one of my existing posts in the dashboard allows the user to delete or update a post and takes them back to an updated dashboard.

When users click on the logout option in the navigation they are signed out of the site.

If a user is idle on the page for more than a set time, they are automatically signed out of the site.


## Details

T.blog's folder structure must follow the Model-View-Controller paradigm. 

T.blog uses:

* Handlebars.js https://www.npmjs.com/package/handlebars
* Express Handlebars https://www.npmjs.com/package/express-handlebars
* Mysql https://www.npmjs.com/package/mysql2
* Sequelize https://www.npmjs.com/package/sequelize
* dotenv https://www.npmjs.com/package/dotenv
* bcrypt https://www.npmjs.com/package/bcrypt
* Express Session https://www.npmjs.com/package/express-session 
* https://www.npmjs.com/package/connect-session-sequelize
