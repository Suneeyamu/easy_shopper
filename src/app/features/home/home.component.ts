import { Component, OnInit } from '@angular/core';
import { CarouselItem } from './../../shared/interfaces/banner.interface';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   items: CarouselItem[] = [];
   getCount:number=6;

  constructor(private navService: NavigationService, private spinner: NgxSpinnerService, private router:Router){}

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

  passCategoryCount(){
    this.getCount = 0;
    this.router.navigate(['/dasboard/categoryList'])
  }

}
