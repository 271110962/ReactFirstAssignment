import _ from "lodash";

class DataAPI {
    constructor() {
        this.books = [];
    }

    find(id) {
        let index = _.findIndex(
        this.books,
        book => `${book.id}${book.publishdate}` === id
        );
        if (index !== -1) {
        return this.books[index];
        }
        return null;
    }

    

    delete(k) {
        let elements = _.remove(this.books, book => book.id === k);
        return elements;
    }

    add(name, authorfirst,authorlast){
        let id = 1;
        let end = _.last(this.books);

        if(end){
        id = end.id + 1;
        }
        let len = this.books.length;
        let newLen = this.books.push({
            id ,
            name,
            authorfirst,
            authorlast,
            mark:"6",
            type:"Science",
            publishdate:"19921205",
            publishinghouse:"shenzhen press",
            introduction:"iudhudiuindininj",
            picture:{thumbnail: "./images/grimm.jpg"}
        });
        return newLen>len;
    }


    initialize(books) {
        this.books = books;
    }

    getAll() {
        return this.books;
    }

    update(key, name,type) {
        let index = _.findIndex(this.books, book => book.name === key);
        if (index !== -1) {
        this.books[index].name = name;
        this.books[index].type = type;
        return true;
        }
        return false;
    }
}

export default new DataAPI();