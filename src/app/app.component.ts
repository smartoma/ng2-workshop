import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import SearchService from "./services/search.service";
import {BookComponent} from "./book/book.component";
import {SearchComponent} from "./search/search.component";
import {ResultComponent} from "./search/result.component";
import {BookDetailComponent} from "./book/bookdetail.component";
import {Router} from 'angular2/router';

@Component({
    selector: 'book-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, SearchComponent],
    providers: [SearchService]
})
@RouteConfig(
    [
        // Oppgave 1. legg til riktig path '/books' for 'Books'
        {path: 'BOOKS-PATH-CHANGE-ME', name: 'BOOKS-NAME-CHANGE-ME', component: BookComponent},
        // Oppgave 2. legg til riktig path med 'id' som en path variable til 'Book'
        {path: 'BOOK-ID-PATH-CHANGE-ME', name: 'BOOK-ID-PATH-CHANGE-ME', component: BookDetailComponent},
        // Oppgave 1. legg til riktig path '/search' for 'Search'
        {path: 'SEARCH-PATH-CHANGE-ME', name: 'SEARCH-NAME-CHANGE-ME', component: ResultComponent}
    ]
)
export class AppComponent {
    constructor(private _router:Router) {
    }

    show(viewName:string) {
        this._router.navigate([viewName]);
    }
}
