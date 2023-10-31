# Todo Application with Real-time Updates

**Todo Application** is a real-time web application built with Node.js, Express.js, Socket.IO, and MongoDB. It enables users to manage their todos seamlessly, providing a dynamic and interactive user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Database](#database)
- [Authentication](#authentication)
- [Contributing](#contributing)

## Installation

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm start
```
## Usage

- **Visit:** Visit [http://localhost:3000](http://localhost:3000) in your browser to access the application.
- **Register/Login:** Users can register for an account or log in with existing credentials.
- **Create:** Add new todos with a title and description.
- **Read:** View a list of todos with real-time updates.
- **Update:** Mark todos as completed or edit their content.
- **Delete:** Remove unwanted todos.

## Features

- **Real-time Updates:** Todos update in real-time across all connected clients.
- **User Authentication:** Secure registration and login system.
- **CRUD Operations:** Create, read, update, and delete todos seamlessly.
- **Interactive Interface:** Intuitive UI for managing todos efficiently.

## Technologies Used

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white) JavaScript runtime environment.
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat-square&logo=express&logoColor=white) Web application framework for Node.js.
- ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat-square&logo=socket.io&logoColor=white) Real-time communication library.
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) NoSQL database for storing user data and todos.
- ![bcrypt](https://img.shields.io/badge/bcrypt-007272?style=flat-square&logo=npm&logoColor=white) Password hashing library for data security.

## Database

- **Database Name:** `todo-app-db`
- **Collections:**
  - `users:` Stores user authentication data (username, hashed password).
  - `todos:` Stores todo items (title, description, completion status).
- **Connection String:** `mongodb://localhost:27017/todo-app-db`

## Authentication

User authentication is implemented using Passport.js and bcrypt for password hashing.

## Contributing

- Report bugs or suggest features by opening an issue.
- Fork the repository, make changes, and submit a pull request.
