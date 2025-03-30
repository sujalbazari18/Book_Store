# Book Store API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

A robust RESTful API for managing a book store inventory, offering comprehensive CRUD operations with sorting and filtering capabilities. The API includes user authentication with JWT.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
- [API Documentation](#api-documentation)
  - [Authentication Endpoints](#authentication-endpoints)
  - [Books Endpoints](#books-endpoints)
  - [Query Parameters](#query-parameters)
  - [Examples](#examples)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Overview

This Book Store API provides a secure backend solution for managing book inventory. The API enables authenticated users to create, read, update, and delete books, as well as sort and filter the collection based on various attributes such as rating, author, and category.

## Features

- **User Authentication**: Secure JWT-based authentication system
- **Complete CRUD Operations**: Manage book records with create, read, update, and delete functionalities
- **Advanced Sorting**: Sort books by any field (ascending/descending)
- **Flexible Filtering**: Filter books by:
  - Author
  - Category
- **Combined Operations**: Apply both sorting and filtering simultaneously
- **MongoDB Integration**: Efficient data storage and retrieval
- **Secure Routes**: Protected endpoints requiring authentication

## Technologies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **dotenv**: Environment variable management

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sujalbazari18/Book_Store.git
cd Book_Store
```

2. Install dependencies:

```bash
npm install
```

### Environment Configuration

1. Create a `.env` file in the root directory:

```bash
PORT=5000
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongodb://localhost:27017/bookstore
```

2. Start the server:

```bash
# Development mode
npm run dev

# Production mode
npm start
```

3. The server will be running at:

```
http://localhost:5000/
```

## API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login and receive JWT token |

### Books Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Retrieve all books (with optional sorting and filtering) |
| GET | `/api/books/:id` | Retrieve a specific book by ID |
| POST | `/api/books/add` | Add a new book |
| PUT | `/api/books/:id` | Update an existing book |
| DELETE | `/api/books/:id` | Delete a book |

**Note**: All book endpoints require authentication. Include the JWT token in the Authorization header using the format: `Bearer <token>`

### Query Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `sortBy` | Field to sort by (any book field) | `?sortBy=rating` |
| `order` | Sort order (asc, desc) | `?order=desc` |
| `author` | Filter by author name | `?author=J.K. Rowling` |
| `category` | Filter by book category | `?category=Fiction` |

### Examples

**Register a new user:**
```
POST http://localhost:5000/api/users/register
```
Body:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

**Login:**
```
POST http://localhost:5000/api/users/login
```
Body:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Response:
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Get all books sorted by rating (descending):**
```
GET http://localhost:5000/api/books?sortBy=rating&order=desc
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Get all books by a specific author:**
```
GET http://localhost:5000/api/books?author=J.K. Rowling
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Add a new book:**
```
POST http://localhost:5000/api/books/add
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
Body:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "category": "Fiction",
  "rating": 4.5,
  "price": 12.99,
  "publicationDate": "1925-04-10"
}
```

## Database Schema

### Book Schema

The book schema includes the following fields:

- `title`: String (required)
- `author`: String (required)
- `category`: String (required)
- `rating`: Number (0-5)
- `price`: Number
- `publicationDate`: Date

### User Schema

The user schema includes the following fields:

- `email`: String (required, unique)
- `password`: String (required, hashed)
