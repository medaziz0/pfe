import { HttpClient } from '@angular/common/http';
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

  forgotPassword(user){
    return this.http.post(environment.apiURL + "api/auth/forgotPassword" , user);
  }
}
