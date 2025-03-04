import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private productListJson = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.productListJson);
  }
}
