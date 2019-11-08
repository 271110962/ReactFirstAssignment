import React, { Component, Fragment } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import BookList from '../src/components/bookList/';
import api from "./dataChange/datachangeAPI";
import _ from "lodash";

class App extends Component {

  state = {search:"", category:"Category",status:""};

  handleSearchChange = (type, value) => {
    this.setState({status:""})
    type === "name"
    ?this.setState({ search: value })
    :this.setState({ category: value });
  };

  handleButtonChange = (type)=>{
    if(type === "click"){
      this.setState({status:"sort"});
    }else if(type === "home"){
      this.setState({status:""});
      this.setState({ category: "Category" });
    }else{
      this.setState({status:"sortDate"});
    }
  }



  deleteBook = (key) => {
    api.delete(key); 
    this.setState({});                          
  };

  render() {
    let books = api.getAll();
    let filteredBooks = books.filter(b=>{
    const name = `${b.name}`;
    return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });

    filteredBooks = 
    this.state.category==="Category"
      ?filteredBooks
      :filteredBooks.filter(b=>b.type===this.state.category);


    let sortedBooks = _.sortBy(filteredBooks, b => b.id);
    let sortedMark =_.sortBy(books, b => b.mark).reverse();
    let sortedDate = _.sortBy(books, b => b.publishdate).reverse();
    let sortOrNot = null;
    if(this.state.status === "sort"){
      sortOrNot = sortedMark
    }else if(this.state.status === "sortDate"){
      sortOrNot = sortedDate
    }else{
      sortOrNot = sortedBooks
    }
  

    return (
      <Fragment className="appbackground">
        
        <Header noBooks={sortOrNot.length} onUserInput={this.handleSearchChange}/>
        <FilterControls onUserInput={this.handleSearchChange} onUser={this.handleButtonChange}/>
        <BookList books={sortOrNot} deleteHandler={this.deleteBook}/>

      </Fragment>
    );
  }
}

export default App;
