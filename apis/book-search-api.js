import { SearchAPI } from "./search-api";

export class BookSearchAPI extends SearchAPI {
  constructor(query) {
    super();
    this.url += `/book.json?query=${query}`;
  }
}
