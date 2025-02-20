import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  userDetails:any;
  constructor(private authService: AuthService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();
    const user = this.authService.getUser();
    if(user){
      this.userDetails = user ? JSON.parse(user) : null;
      this.spinner.hide();
    }
  }

}
