import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {BookService} from "../services/book.service";
import {Router} from "angular2/router";
import {BookDetails} from "../model/bookdetails";

@Component({
    templateUrl: 'app/book/bookdetail.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [BookService]
})
export class BookDetailComponent implements OnInit {
    bookDetails:BookDetails;

    constructor(private routeParams:RouteParams,
                private bookService:BookService) {
    }

    ngOnInit():any {
        this.bookDetails = this.bookService.getDetails(parseInt(this.routeParams.get('id')));
        console.log("BookDetails is now: " + JSON.stringify(this.bookDetails));
    }

}