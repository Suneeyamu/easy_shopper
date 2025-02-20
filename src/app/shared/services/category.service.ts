import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesJson = 'assets/data/categories.json';

  constructor(private http:HttpClient) { }

  getCategories(count: number): Observable<any[]> {
    return this.http.get<any[]>(this.categoriesJson).pipe(
      map(categories => {
        if (count === 0 || count === -1) {
          return categories; // Return all categories if count is 0 or -1
        }
        return categories.slice(0, count); // Return only the specified number of categories
      })
    );
  }
}
