import React from "react";
import { useParams, useHistory } from "react-router-dom";
import booksData from "./booksData";

function BookDetails() {
  const { bookId } = useParams();
  const thisBook = booksData.find((book) => book.id == bookId);
  console.log(thisBook);
  return (
    <div>
      <img src={thisBook.img} />
      <h1>{thisBook.name}</h1>
      <p>{thisBook.description}</p>
    </div>
  );
}

export default BookDetails;
