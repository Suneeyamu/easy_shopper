import { Component, OnInit } from '@angular/core';
import { NgxSpinner } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  userDetails:any;
  constructor(private authService: AuthService, private spinner: NgxSpinner){}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.userDetails = user ? JSON.parse(user) : null;
  }

}
