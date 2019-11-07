import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import BookList from '../src/components/bookList/';
import datafile from './data/data.json';
import api from "./dataChange/datachangeAPI";

class App extends Component {

  state = {search:"", category:"all"};

  componentDidMount(){
      let{results : books} =datafile;
      api.initialize(books);
      this.setState({});
  }


  render() {
    let books = api.getAll();

    return (
      <div className="appbackground">
        <Header noBooks={10} />
        <FilterControls />
        <BookList books={books} />
      </div>
    );
  }
}

export default App;
