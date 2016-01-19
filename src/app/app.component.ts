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
        {path: '/books', name: 'Books', component: BookComponent, useAsDefault: true},
        {path: '/book/:id', name: 'BookDetails', component: BookDetailComponent},
        {path: '/search', name: 'Search', component: ResultComponent}
    ]
)
export class AppComponent {
    constructor(private _router:Router) {
    }

    show(viewName:string) {
        this._router.navigate([viewName]);
    }
}
