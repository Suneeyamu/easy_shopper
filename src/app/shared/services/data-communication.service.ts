import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  private refreshLogout = new Subject<void>();
  refreshLogout$ = this.refreshLogout.asObservable();

  constructor(private authService:AuthService, private router: Router) { }

  triggerRefreshLogout() {
    this.refreshLogout.next();
  }

}
