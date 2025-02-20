import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  menu:any;
  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.navService.getMenu().subscribe((res) => {
      this.menu = res;
    })  
  }

  
}
