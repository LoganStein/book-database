import React from "react";
import { useParams, useHistory } from "react-router-dom";
import booksData from "./booksData";
import "./css/bookDetails.css";
import Header from "./Header";

function BookDetails() {
  const { bookId } = useParams();
  const thisBook = booksData.find((book) => book.id == bookId);
  console.log(thisBook);
  return (
    <div>
      <Header />
      <div className="container">
        <img src={thisBook.img} />
        <div className="details">
          <h1>{thisBook.name}</h1>
          <p>{thisBook.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
