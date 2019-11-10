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