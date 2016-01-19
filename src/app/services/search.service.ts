import {BOOK_DATA} from './book.data';
import {Output, EventEmitter} from "angular2/core";
import {BookDetails} from "../model/bookdetails";

export default class SearchService {

    @Output() resultEvent:EventEmitter<BookDetails[]> = new EventEmitter();

    search(searchKey:string):any {
        let searchResults:BookDetails[] = BOOK_DATA.filter((book) => {
            return (book.author + book.title + book.isbn)
                .toLowerCase()
                .includes(searchKey);
        });
        this.resultEvent.emit(searchResults);
    }

    clear() {
        this.resultEvent.emit(null);
    }
}