import React from "react";
import Book from "./Book";
import booksData from "./booksData";
import "./css/bookList.css";
import { Link } from "react-router-dom";

function BookList() {
  const bookList = booksData.map((book) => {
    return (
      <Link to={`/books/${book.id}`}>
        <Book title={book.name} src={book.img} author={book.author} />
      </Link>
    );
  });
  return <div className="book-list">{bookList}</div>;
}

export default BookList;
