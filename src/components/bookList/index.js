import React, { Component } from "react";
import Book from "../book/";
import './bookList.css';

export default class BookList extends Component {
  render() {
    const bookCards = this.props.books.map(b => (
      <Book key={b.id} book={b} deleteHandler={this.props.deleteHandler}/>
    ));
    return (
      <div className="container-fluid books bg-info">
        <div className="row">{bookCards}</div>
      </div>
    );
  }
}