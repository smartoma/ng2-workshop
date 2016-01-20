import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {BOOK_DATA} from "../services/book.data";
import {OnDestroy} from "angular2/core";
import {BookDetails} from "../model/bookdetails";

@Component({
    templateUrl: 'app/book/books.html',
})
export class BookComponent {
    bookData = BOOK_DATA;

    constructor(private _router:Router) {
    }


    select(bookDetails:BookDetails) {
        this._router.navigate(['BookDetails', {id: bookDetails.id}]);
    }
}
