import React from "react";
import "./css/bookList.css";

function Book(props) {
  return (
    <div className="book">
      <img src={props.src} />
      <h3>{props.title}</h3>
      <p>by {props.author}</p>
    </div>
  );
}

export default Book;
