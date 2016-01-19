import {Component} from 'angular2/core';
import {SearchComponent} from "./search.component";
import {OnInit} from "angular2/core";
import SearchService from "../services/search.service";
import {Input} from "angular2/core";
import {OnChanges} from "angular2/core";
import {BookDetails} from "../model/bookdetails";

@Component({
    templateUrl: "app/search/result.html"
})
export class ResultComponent implements OnInit {
    searchResults:BookDetails[];

    constructor(private searchService:SearchService) {
    }

    ngOnInit():any {
        this.searchService.resultEvent.subscribe((result) => {
            this.searchResults = result;
        });
    }

    whenEmptyResult():boolean {
        return this.searchResults == null || this.searchResults.length == 0;
    }
}