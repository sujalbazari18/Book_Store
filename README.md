Book Store Project

Description

This is a backend application for managing a book store. The project allows users to perform CRUD operations on books, including adding, viewing, deleting, sorting, and filtering books based on various attributes. The project uses MongoDB as the database and Express.js as the server framework.

Installation

Clone the repository:

git clone https://github.com/sujalbazari18/Book_Store.git

Install dependencies:

npm install

Set up your environment variables in a .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore

Start the server:

npm start

Usage

Visit the server on:

http://localhost:5000/

Example API Requests:

Get all books:

GET http://localhost:5000/api/books

Add a new book:

POST http://localhost:5000/api/books/add

Get a book by ID:

GET http://localhost:5000/api/books/:id

Delete a book by ID:

DELETE http://localhost:5000/api/books/:id

Sort books by price:

GET http://localhost:5000/api/books?sortBy=price&order=asc

Filter books by author:

GET http://localhost:5000/api/books?author=SUJAL

Features

CRUD operations for books

Sorting by price, rating, and publication date

Filtering by author and category

Combined sorting and filtering

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Contribution

Feel free to open issues or submit pull requests for improvements and bug fixes.