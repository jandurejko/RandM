import { default as axios } from 'axios'

export default class Api {
  private client: any
  private url: string

  constructor() {
    this.client = null;
    this.url = "https://rickandmortyapi.com/api";
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getCharacters = () => {
    return this.init().get("/character");
  };

}

