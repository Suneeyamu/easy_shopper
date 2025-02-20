import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarouselItem } from '../interfaces/banner.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navJson = 'assets/data/nav.json';
  private bannerJson = 'assets/data/banner.json';


  constructor(private http:HttpClient) { }

  getMenu() {
    return this.http.get<any>(this.navJson);
  }

  getBanners() {
    return this.http.get<CarouselItem[]>(this.bannerJson);
  }
}
