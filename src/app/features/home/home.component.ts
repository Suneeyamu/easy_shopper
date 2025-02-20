import { Component, OnInit } from '@angular/core';
import { CarouselItem } from './../../shared/interfaces/banner.interface';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   items: CarouselItem[] = [];

  constructor(private navService: NavigationService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();
    this.navService.getBanners().subscribe({
     next: (res) => {
      this.spinner.hide();
      this.items = res;      
     },
     error: (err) => {
      console.log('Banner Error: ', err);
      this.spinner.hide();
    }, 
    })
  }

}
