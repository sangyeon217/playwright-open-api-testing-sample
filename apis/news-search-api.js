import { SearchAPI } from "./search-api";

export class NewsSearchAPI extends SearchAPI {
  constructor(query) {
    super();
    this.url += `/news.json?query=${query}`;
  }
}
