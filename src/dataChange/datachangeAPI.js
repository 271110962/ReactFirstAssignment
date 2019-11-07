import _ from "lodash";

class DataAPI {
    constructor() {
        this.books = [];
    }

    find(id) {
        let index = _.findIndex(
        this.books,
        book => `${book.id}` === id
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

    update(key, id) {
        let index = _.findIndex(this.books, book => book.id === key);
        if (index !== -1) {
        this.books[index].id = id;//输入你想改的属性
        return true;
        }
        return false;
    }
}

export default new DataAPI();