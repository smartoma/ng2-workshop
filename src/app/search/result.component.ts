import {Component} from 'angular2/core';
import {BookDetails} from "../services/book.service";
import {SearchComponent} from "./search.component";
import {OnInit} from "angular2/core";
import SearchService from "../services/search.service";
import {Input} from "angular2/core";
import {OnChanges} from "angular2/core";

@Component({
    templateUrl: "app/search/result.html"
})
export class ResultComponent implements OnInit {
    searchResults:BookDetails[];

    constructor(private searchService:SearchService) {
    }

    ngOnInit():any {
        this.searchService.resultEvent.subscribe((data) => {
            this.searchResults = data;
        });
    }
}