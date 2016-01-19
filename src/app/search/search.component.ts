import {Component,EventEmitter} from 'angular2/core';
import {BookDetails} from "../services/book.service";
import SearchService from "../services/search.service";
import {Output} from "angular2/core";

@Component({
    selector: "search",
    template: `<input type="text" #key (keyup)="search(key.value)" placeholder="Search">`
})
export class SearchComponent {

    constructor(private searchService: SearchService) {
    }

    search(searchKey:string) {
        if (searchKey.length > 2) {
            this.searchService.search(searchKey);
        } else {
            this.searchService.clear();
        }
    }
}