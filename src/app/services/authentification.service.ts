import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(environment.apiURL + "api/auth/login", user);
  }

  signup(user) {
    return this.http.post(environment.apiURL + "api/auth/register", user);
  }

  forgotPassword(email:any){
    console.log('emaill',email);
    const params = new HttpParams().set('email', email);
    return this.http.post<any>(environment.apiURL + "api/auth/forgotPassword" ,{}, { params });
  }
  resetPassword(password:any,email:any){
    const params = new HttpParams().set('password', password)
                                  .set('email',email);

    return this.http.post<any>(environment.apiURL + "api/auth/reset" ,{}, { params });
  }
  isAuthenticated(){
    return !!localStorage.getItem('auth-token');
  }
}
