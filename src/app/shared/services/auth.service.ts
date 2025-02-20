import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authJson = 'assets/data/users.json';

  constructor(private http: HttpClient) { }

  getUserDetails(email:string, password:string): Observable<any> {
    return this.http.get<any>(this.authJson).pipe(
      map(res => {
        const user = res.find((u:any) => u.email === email && u.password === password);
        return user ? user: null
      })
    )
  }

  setUser(userDetails:any) {
    return sessionStorage.setItem('user', JSON.stringify(userDetails));
  }

  getUser() {
    const data = sessionStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }

  // Clear sessionStorage
  clearUser(): void {
    sessionStorage.clear();
  }
}
