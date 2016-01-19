import {BOOK_DATA} from './book.data';
import {BookDetails} from "../model/bookdetails";
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

