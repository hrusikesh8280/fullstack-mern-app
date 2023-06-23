# fullstack-mern-app

This is a fullstack MERN (MongoDB, Express, React, Node.js) application that allows users to register, authenticate, and perform CRUD operations on posts. The application provides a user-friendly interface for creating, editing, and deleting posts, and it integrates with external APIs for additional functionality. It showcases the use of modern web development technologies and follows best practices for building scalable and maintainable fullstack applications.

By leveraging the power of React for the frontend and Node.js for the backend, this app delivers a seamless user experience with real-time data updates and efficient data storage in a MongoDB database. The Chakra UI library is used to enhance the visual design and provide a consistent and responsive layout across different devices.

The project demonstrates the implementation of user authentication using JWT (JSON Web Tokens) for secure user registration and login. It also highlights the use of RESTful API endpoints for managing posts, including creating new posts, fetching all posts, updating existing posts, and deleting posts.

With its clean architecture, robust functionality, and elegant design, this fullstack MERN app serves as a solid foundation for building feature-rich web applications with modern web technologies.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Project Overview

The Fullstack MERN App is a comprehensive web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a complete solution for users to register, authenticate, and manage posts within a user-friendly interface.

### Key Features

- **User Registration and Authentication:** The app allows users to register with their email and password, and provides secure authentication using JWT (JSON Web Tokens). Users can securely log in to access the application's features and functionalities.

- **Post Management:** Users can create, read, update, and delete posts. The app provides a seamless interface for managing posts, including adding new posts, viewing existing posts, editing post content, and removing posts from the database.

- **Integration with External APIs:** The application integrates with external APIs to enhance its functionality. This includes the ability to fetch additional data from external sources and incorporate it into the app's features.


## Technologies Used

The Fullstack MERN App utilizes the following technologies and frameworks:

- **Frontend:** The frontend is built with React, a popular JavaScript library for building user interfaces. The Chakra UI library is used for styling and creating a visually appealing and responsive design.

- **Backend:** The backend is powered by Node.js and Express, providing a robust and scalable server-side infrastructure. MongoDB is used as the database to store user information and post data.

- **Authentication and Security:** User authentication is implemented using JWT (JSON Web Tokens) for secure and stateless authentication. Passwords are hashed using bcrypt to ensure user data remains protected.

## Features
- User registration and authentication
- CRUD operations for managing posts
- Integration with external APIs
## Getting Started

### Installation


git clone https://github.com/hrusikesh8280/fullstack-mern-app
- cd your-repository
- npm install

Configure environment variables:

 Create a .env file in the root directory of the project.
- PORT=7009
- MONGODB_URL=your-mongodb-url
### Start the backend server:
npm start
The Backend will be  running on http://localhost:7009.



## Frontend Setup

Navigate to the frontend directory:

cd frontend
-Install the frontend dependencies:
- <p>npm install</p>

-Start the frontend development server:
-<p>npm start</p>

Usage
Provide instructions on how to use the project. 
Include any relevant information on how to navigate the application, perform actions, and interact with the different features.

### Backend API Routes

- User Registration: `POST http://localhost:7009/api/user/register`
- User Login: `POST http://localhost:7009/api/user/login`
- Create a Post: `POST http://localhost:7009/api/post/add`
- Get All Posts: `GET http://localhost:7009/api/post`
- Edit a Post: `PATCH http://localhost:7009/api/post/:id`
- Delete a Post: `DELETE http://localhost:7009/api/post/:id`

### Screenshots 
- Home page
![home](https://github.com/hrusikesh8280/fullstack-mern-app/assets/86557158/7ed6bf86-8a95-46d8-a459-ed93fd39dc34)
- Authorization Form
![authntication](https://github.com/hrusikesh8280/fullstack-mern-app/assets/86557158/ee70882c-1f23-4e77-a505-e6e9d9eddf29)

- Post section
![post section](https://github.com/hrusikesh8280/fullstack-mern-app/assets/86557158/5f543443-2ff4-41d1-9adf-645e6befb2d1)
- Edit Modal
![editing modal](https://github.com/hrusikesh8280/fullstack-mern-app/assets/86557158/71d6fff4-7c02-419b-96b4-e018a84b33a2)




## Contributing
If you'd like to contribute to the project, please follow the guidelines below:
- Fork the repository
- Create a new branch
- Make your changes
- Test your changes
- Submit a pull request


