import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataCommunicationService } from 'src/app/shared/services/data-communication.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: any;
  isUserStatus: boolean = false;
  constructor(
    private navService: NavigationService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private dataService: DataCommunicationService
  ) {
    this.isUserStatus = this.authService.getUser() ? true : false;
  }

  ngOnInit(): void {
    this.navService.getMenu().subscribe((res) => {
      this.menu = res;
    });
    this.dataService.refreshLogout$.subscribe(() => {
      this.navService.getMenu().subscribe((res) => {
        this.menu = res;
        this.isUserStatus = this.authService.getUser() ? true : false;

      });
    })
  }

  gotoAction(val:string){
    if(val === 'signin'){
      this.router.navigate(['sign-in']);
    }else if(val === 'signup'){
      this.router.navigate(['sign-up']);
    }
  }

  logoutUser() {
    this.authService.clearUser();
    this.toastr.success('See you soon!', 'Thank you for visting :)');
    this.dataService.triggerRefreshLogout();
    this.router.navigate(['dashboard']);
  }
}
