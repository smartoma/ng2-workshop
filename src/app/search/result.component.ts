import {Component} from 'angular2/core';
import {SearchComponent} from "./search.component";
import SearchService from "../services/search.service";
import {BookDetails} from "../model/bookdetails";

@Component({
    templateUrl: "app/search/result.html"
})
export class ResultComponent {
    searchResults:BookDetails[];

    constructor(private searchService:SearchService) {
    }

    // Oppgave 5. her bestiller man resultater fra searchService.
    // Men ingen bruker dette ennå....
    private subscribeSearchResults() {
        this.searchService.resultEvent.subscribe((result) => {
            this.searchResults = result;
        });
    };

    // Oppgave 6. bruk dette får å vise/skjule dom-elementer.
    whenEmptyResult():boolean {
        return this.searchResults == null || this.searchResults.length == 0;
    }
}