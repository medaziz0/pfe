import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AoService {

  constructor(private http: HttpClient) {}

  getAllemploi() {
    
    return this.http.get(environment.apiURL + "get-all-ao");
  }

  getEmploiById(id) {
    return this.http.get(`${environment.apiURL}get-ao/${id}`);
  }

  deleteEmploi(id) {
    return this.http.delete(`${environment.apiURL}delete-ao/${id}`);
  }

  addEmploi(obj, projetId) {
    console.log("obj", obj);
    
    return this.http.post(environment.apiURL + "create-ao/" + projetId, obj);
  }

  updateEmploi(obj) {
    return this.http.put(environment.apiURL + "update-ao", obj);
  }
}
