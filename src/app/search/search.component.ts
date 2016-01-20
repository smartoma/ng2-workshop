import {Component,EventEmitter} from 'angular2/core';
import SearchService from "../services/search.service";
import {Output} from "angular2/core";

@Component({
    // Oppgave 4. Legg til selector som heter 'search'.
    // Oppgave 4. Endre template, den skal binde keyup-event og trigge search
    // med verdien til input-felt.
    template: `<input type="text"  placeholder="Search">`
})
export class SearchComponent {

    constructor(private searchService: SearchService) {
    }

    search(searchKey:string) {
        if (searchKey.length > 2) {
            this.searchService.search(searchKey.toLowerCase());
        } else {
            this.searchService.clear();
        }
    }
}