import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>(environment.apiURL + "user/findAll");
  }

  saveUser(user:any){
    return this.http.post<any>(environment.apiURL + "user/save",user);
  }


}
