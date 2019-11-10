# BSc (Hons.) Level 8 - Assignment 1 - Library web page.

Name: Jinyu Chen

## Overview.

This is a library management web page , 
You can search the data of books stored in json files, 
edit them, or delete them. And you can access each book by clicking on the picture of each book, 
and view the book's content introduction and metadata.

. . . . . List of user features  . . . .

- Feature 1 : Search for bookname keywords on the search bar
- Feature 2 : Filter for differentiate between different types of books
- Feature 3 : Each book will have a different book review, combined in the form of a full star, half star, and empty star.
- Feature 4 : There are three buttons(Home, Leaderboard,new shelves) to handle the booklist sort as id, bookreview, publish date.
- etc

## Setup.

git clone https://github.com/271110962/ReactFirstAssignment.git

cd ReactFirstAssignment

npm install

npm start


## Data Model Design.

I used json to store data

{
            "id":"1",
            "name": "Kinder-und Hausmärchen",
            "author": {
                    "name":{ "first":"Wilhelm", "last":"Grimm"}
                },
            "mark" : "1",
            "type" : "Children",
            "large": "../../images/grimm.jpg",
            "publishdate":"20161205",
            "publishinghouse": "dublin Press",
            "picture": {"thumbnail": "./images/grimm.jpg"}
        }

## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .

![][main]

>> Shows a book for each book in the dataChange. This book list can be filtered by name and categoty. A book can be edited or deleted a book. 

![][detail]

>> using the filter to connect the catogory selector and the searchbox, it will filter the data with the dataChangeApi, and render to the page, using the buttonconfig in the config folder to change the situation when you edit and delete, you can cancel whatever you choose.

## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /books (public)- displays all public content, header,booklist,book,filterControls.
- /books/:id (private) - detail view of a particular book.
+ /books/:id/introduction(private) - display all information by a specific book.
- etc
- etc

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![][stories]

. . . . (Optional) State any non-standard Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend (Optional).

JSON-server store the each book data: id, bookname, publish date, press, author, introduction for a book.

## Authentication (Optional).

using the Surge to deployed the app.  url:  http://doubtful-meal.surge.sh/

## Independent learning.

. . . . . State any non-standard aspects of React or other related technologies that you researched and applied in this assignment, other than those covered by the two previous sections . . . . .

[model]: ./img/model.png
[main]: ./img/main.png
[detail]: ./img/detail.png
[stories]: ./img/stories.png
