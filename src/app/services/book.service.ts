import {BOOK_DATA} from './book.data';
export class BookService {

    getDetails(id:number):BookDetails {
        let details = BOOK_DATA.find((element) => {
            return <number>element.id == <number>id;
        });
        return new BookDetails(
            details.id,
            details.title,
            details.author,
            details.isbn,
            details.description
        );
    }
}

export class BookDetails {
    constructor(public id:number,
                public title: string,
                public author: string,
                public isbn: string,
                public description: string) {
    }
}