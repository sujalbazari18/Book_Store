# Book Store API

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

A robust RESTful API for managing a book store inventory, offering comprehensive CRUD operations with sorting and filtering capabilities.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
- [API Documentation](#api-documentation)
  - [Books Endpoints](#books-endpoints)
  - [Query Parameters](#query-parameters)
  - [Examples](#examples)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Overview

This Book Store API provides a backend solution for managing book inventory. The API enables users to create, read, update, and delete books, as well as sort and filter the collection based on various attributes such as price, rating, author, and category.

## Features

- **Complete CRUD Operations**: Manage book records with create, read, update, and delete functionalities
- **Advanced Sorting**: Sort books by:
  - Price (ascending/descending)
  - Rating (ascending/descending)
  - Publication date (newest/oldest)
- **Flexible Filtering**: Filter books by:
  - Author
  - Category
- **Combined Operations**: Apply both sorting and filtering simultaneously
- **MongoDB Integration**: Efficient data storage and retrieval

## Technologies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB
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
MONGO_URI=mongodb://localhost:27017/bookstore
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

### Books Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Retrieve all books (with optional sorting and filtering) |
| GET | `/api/books/:id` | Retrieve a specific book by ID |
| POST | `/api/books/add` | Add a new book |
| PUT | `/api/books/:id` | Update an existing book |
| DELETE | `/api/books/:id` | Delete a book |

### Query Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `sortBy` | Field to sort by (price, rating, date) | `?sortBy=price` |
| `order` | Sort order (asc, desc) | `?order=desc` |
| `author` | Filter by author name | `?author=SUJAL` |
| `category` | Filter by book category | `?category=Fiction` |

### Examples

**Get all books sorted by price (ascending):**
```
GET http://localhost:5000/api/books?sortBy=price&order=asc
```

**Get all books by a specific author:**
```
GET http://localhost:5000/api/books?author=SUJAL
```

**Get all fiction books sorted by rating (descending):**
```
GET http://localhost:5000/api/books?category=Fiction&sortBy=rating&order=desc
```

**Add a new book:**
```
POST http://localhost:5000/api/books/add
```
Body:
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A novel about the American Dream",
  "price": 12.99,
  "rating": 4.5,
  "category": "Fiction",
  "publishDate": "1925-04-10"
}
```

## Database Schema

The book schema includes the following fields:

- `title`: String (required)
- `author`: String (required)
- `description`: String
- `price`: Number (required)
- `rating`: Number
- `category`: String
- `publishDate`: Date
