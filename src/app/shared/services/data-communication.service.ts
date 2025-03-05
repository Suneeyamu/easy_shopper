import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DataCommunicationService {
  private defaultConfig = {
    closeButton: true,
    progressBar: true,
    timeOut: 3000,
  };

  private refreshLogout = new Subject<void>();
  refreshLogout$ = this.refreshLogout.asObservable();

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  info(message: string, title: string = 'Info') {
    this.toastr.info(message, title, this.defaultConfig);
  }

  success(message: string, title: string = 'Success') {
    this.toastr.success(message, title, this.defaultConfig);
  }

  warning(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title, this.defaultConfig);
  }

  error(message: string, title: string = 'Error') {
    this.toastr.error(message, title, this.defaultConfig);
  }

  triggerRefreshLogout() {
    this.refreshLogout.next();
  }
}
