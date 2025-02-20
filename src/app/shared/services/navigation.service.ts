import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navJson = 'assets/data/nav.json';


  constructor(private http:HttpClient) { }

  getMenu() {
    return this.http.get<any>(this.navJson);
  }
}
