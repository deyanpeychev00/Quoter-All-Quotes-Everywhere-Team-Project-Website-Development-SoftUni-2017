# QUOTER - All Quotes Everywhere!
 ## Contributors:
+ Deyan Plamenov Peychev: [GitHub](https://github.com/deyanpeychev00)
+ Kristian Subev Subev: [GitHub](https://github.com/PiQnFiKYc)
+ Stefan Georgiev Petrov: [GitHub](https://github.com/stefangpetrov)

## 01. What is 'Quoter'? 
Quoter is a blog system that allows people from different parts of the world to share their thoughts as well as discover a new way to express themselves.
In this site you can find quotes on all topics and also share your thoughts with users from all over the world.
## 02. Project Goals
The main goal of the project is to create a blog system for sharing quotes on different topics to attract users from all over the world and to unite them in a circle in which each user has the complete freedom to express himself by quotes from different authors, And even his personal.
Another goal of the project is to shape a well-looking design that does not intrude on the user, with nice colors and layout. This contributes to a good user experience using `Quoter`.
The project also aims to provide the user with the necessary functionalities, giving him additional opportunities to use the blog system for quote sharing.
## 03. Main Stages in the Implementation of the Project
+ Define the overall idea of the project
+ Create an initial (sample) version of the blog system
+ Define the database creation information
+ Initial steps in the development by creating logins and user registration
+ Add an option to create new posts (quotes)
+ Add options to edit and delete a post
+ Add user roles to create an administrative profile
+ Add validation validation, registration, change and delete posts
+ Add an admin panel with an option to delete users from the admin
+ Design layout and overall finish of the project
## 04. Level of Complexity of the Project - Major Problems in the Realization of the Set Goals
### The development of the project requires:
+ Knowledge in the field of information technology (IT).
+ Initial knowledge of different programming languages.
+ Initial knowledge of working with databases.
+ Teamwork skills.
### The main problems with the implementation of the project are:
- Specify the information needed to create a database.
- Validation when registering and logging on to users as well as changing and deleting posts from users who are not authors of the article.
- Create an admin profile and panel to manage users and their posts.
- Layout of user-friendly design.
## 05. Description of the solution and realization
### Design and implementation of a database
> `MongoDB` is used to process the database.

`MongoDB` is a database processing system such as `NoSQL databases`. Instead of storing information in tables, as with traditional relational databases, `MongoDB` stores structured information in `JSON` format with dynamic schemas. This makes integration of information in certain applications much easier and faster.
## Technologies Used

`Quoter` was used to create the following technologies:
`HTML` + `Handlebars`, `CSS`, `JavaScript` + `Express.js` `(Node.js)` + `MongoDB`

![Technologies Used](http://i65.tinypic.com/16m5b9f.png)

In order to achieve a user-friendly interface, we used [`Materialize`](http://materializecss.com/) - a modern framework for front-end development

![Materialize](http://i65.tinypic.com/2dh8g94.png)
## 05. View the blog system
### Home Page
Upon initial sign-up, the user enters the homepage:
![Homepage](http://i68.tinypic.com/r9pjz9.png)

Here he can read about what `Quoter` is, visit the wall with the different posts of users, and create an account or join his own if he has already created one.
Below the home page there is a separate column where the user can read information about our team working on the development of the site:
![Developers](http://i65.tinypic.com/ji24w7.png)
### Login and Register
The user can create their own account to share their quotes with other users using our system.
![Login and Register](http://i63.tinypic.com/1hw3sx.png)
### Let's get to know Quoter
Once the user has joined `Quoter`, he can now start sharing his quotations with other users on our wall:
![Wall](http://i64.tinypic.com/24bqkib.png)

> When creating a new post (quote), the user specifies the content of the quote, as well as its author:

![New Post](http://i65.tinypic.com/rixn5y.png)

The user can see the details of each post by clicking the **_READ MORE_** button on the corresponding quote:

![Details](https://photouploads.com/images/cf148b.png)

From here, the user can `like` the post, using the like button, and `edit` or `delete` his post. Each post is secured so that it can be changed or deleted only by the user to whom the quote belongs. The `admin role` has rights to all posts and it can `change` / `delete` each post.

![Edit and Delete Quote](https://photouploads.com/images/1fb58f.png)

### User details
Once logged in, the user has the opportunity to view the `details of their account`. There he can see his `username`, `email`, `registration date`, and his user `role`. There are 2 user roles: `User` and `Admin`.
On this page, the user can see all of his quotes, once again having the opportunity to access the details of each of his posts, and from where he can also edit and delete.

![User Details](https://photouploads.com/images/50db80.png)

### Admin Panel
As mentioned above, there are 2 user roles on the site: `User` and `Admin`. Upon login from the admin account, the `Admin Panel` add-on menu appears. From it, the site's authority can see all `registered users`, as well as see the `ID (from the database)`, `Username` and `E-mail` for each user. `Admin` has the ability to `delete` an account and also `make changes to any post on the site` as described above.

![Admin Panel and User Deleting](https://photouploads.com/images/80d269.png)

## 06. Conclusion
The aim of the project is to create a blog system for sharing quotes on different topics to attract users from all over the world and to unite them in a circle in which each user has the complete freedom to express himself by quotes from different authors, even personally his.
### Future Development
+ Add a profile photo (avatar) to each user.
+ Add an option to change the user role for each user in the admin panel.
+ Add a share option to a social network post via URL.
+ Distribution of the system to attract users from different parts of the world.
## Sources of Information
Project GitHub: [Quoter - All Quotes Everywhere!](https://github.com/SoftUni-Blog-2017-Team-Project)
## Team's GitHub Accounts
+ [Deyan Plamenov Peychev](https://github.com/deyanpeychev00)
+ [Kristian Subev Subev](https://github.com/PiQnFiKYc)
+ [Stefan Georgiev Petrov](https://github.com/stefangpetrov)
