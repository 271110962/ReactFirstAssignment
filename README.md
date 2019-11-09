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

. . . . Having cloned the repo, state the steps required to install and run the app . . . . .

## Data Model Design.

. . . . . A diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][model]

. . . Briefly explain any non-trivial aspects of the model . . . . .

~~~
place code snippets, e.g. JSON, inside these fence delimiters and they will appear in a block-like structure.
~~~
## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .

![][main]

>> Shows a card for each contact in the datastore. This contact list can be filtered by name and gender. A contact can be edited or deleted a contact. 

![][detail]

>> . . . bla bla bla . . . . . 

## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /articles (public)- displays all published articles - title and author only.
- /articles/:id (private) - detail view of a particular article.
+ /articles/:author:id - display all articles by a specific author.
- etc
- etc

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![][stories]

. . . . (Optional) State any non-standard Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend (Optional).

. . . . . Briefly explain any backend used by the app (e.g. JSON-server, Open API) . . . . . .  

## Authentication (Optional).

. . . . Briefly explain the authentication method used by your app (e.g. JWT, Firebase) ). If user registration is not supported, mention test username/password pairs available . . . . . .

## Independent learning.

. . . . . State any non-standard aspects of React or other related technologies that you researched and applied in this assignment, other than those covered by the two previous sections . . . . .

[model]: ./img/model.png
[main]: ./img/main.png
[detail]: ./img/detail.png
[stories]: ./img/stories.png
