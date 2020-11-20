import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor() {}

  getAllArticles(): Promise<Response> {
    return fetch('https://fakestoreapi.com/products').then((res) => {
      return res;
    });
  }
}
