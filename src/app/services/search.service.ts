import {BOOK_DATA} from './book.data';
import {BookDetails} from "./book.service";
import {Output, EventEmitter} from "angular2/core";

export default class SearchService {
    searchResults:BookDetails[];

    @Output() resultEvent:EventEmitter<BookDetails[]> = new EventEmitter();

    search(searchKey:string) {
        this.searchResults = BOOK_DATA.filter((book) => {
            return book.author.includes(searchKey) ||
                book.title.includes(searchKey) ||
                book.isbn.includes(searchKey);
        });
        this.resultEvent.emit(this.searchResults);
    }

    clear() {
        this.searchResults = null;
        this.resultEvent.emit(null);
    }
}