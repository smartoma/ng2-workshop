import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {BookDetails} from "../services/book.service";
import {BOOK_DATA} from "../services/book.data";
import {OnDestroy} from "angular2/core";

@Component({
    templateUrl: 'app/book/books.html',
})
export class BookComponent {
    lat: number = 59.91;
    lng: number = 10.75;
    zoom: number = 10;
    bookData = BOOK_DATA;

    constructor(private _router:Router) {
    }


    select(bookDetails:BookDetails) {
        console.log("Clicked " + JSON.stringify(bookDetails));
        this._router.navigate(['BookDetails', {id: bookDetails.id}]);
    }
}
