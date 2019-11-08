import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/';
import FilterControls from '../src/components/filterControls/';
import Book from '../src/components/book/';
import BookList from '../src/components/bookList/';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route } from "react-router";
import PublicProfile from '../src/components/bookPublic/publicProfile'
import BookPrivateDetails from '../src/components/bookPrivate/'




const sample =  {
  id:"6",
  name: "Pride and Prejudice",
  author: {
          name:{ first:"Jane", last:"Austen"}
      },
  mark : "6",
  type : "Romantic",
  publishdate:"19880312",
  publishinghouse: "new york Press",
  introduction:"The novel describes the daughter of Bennard’s five benevolent monks, and the protagonist is the second daughter, Elizabeth. She met Darcy at the ball, but she heard that he was arrogant. He had always been repelled by his heart. After some twists and turns, Elizabeth lifted his prejudice against Darcy. Darcy also put down arrogance, and the lover finally became a genus. This work uses daily life as the material. The content of the sentimental novels popular in the society and the writing methods of the artificial creation vividly reflect the British township life and the world situation in the conservative and occluded state from the end of the 18th century to the early 19th century. And has been adapted into movies and TV series many times.",
  picture: {thumbnail: "./images/pride.jpg"}
}





storiesOf("Book Room/Header", module).add("default", () => (
    <Header noBooks={10} onUserInput={action('Search criteria changes')}/>
  ));    

storiesOf("Book Room/Filter Controls", module).add("default", () => (
  <FilterControls onUserInput={action('Filter criteria changes') } onUser= {action('Button criteria changes') }/>
  )); 


storiesOf("Book Room/Book", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))

.add("default", () => ( 
  <Book book={sample} deleteHandler={action('Delete confirmed') }/>
)); 

storiesOf("Book Room/Book List", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => { 
  const samples = [sample, sample, sample, sample, sample]
  return <BookList books={samples}/>
});

storiesOf("Book Room/Book Page/PublicProfile", module)
.add("default", () => ( 
   <PublicProfile user={sample}/>
));

storiesOf("Book Room/Book Page/BookPrivate", module)
.add("default", () => ( 
   <BookPrivateDetails user={sample}/>
));





