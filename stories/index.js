import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import Book from '../src/components/book/';
import BookList from '../src/components/bookList/';




const sample = {
  id:'1',
  name: 'HAHA novel',
  author: {
            name:{ first:'Joe', last:'Bloggs'}
          },
  mark : '8',
  picture: {thumbnail: './profile.jpg'}
}





storiesOf("Book Room/Header", module).add("default", () => (
    <Header noBooks={10} />
  ));    

storiesOf("Book Room/Filter Controls", module).add("default", () => (
    <FilterControls />
  )); 


storiesOf("Book Room/Book", module).add("default", () => ( 
  <Book book={sample}/>
)); 

storiesOf("Book Room/Book List", module).add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <BookList books={samples}/>
});



