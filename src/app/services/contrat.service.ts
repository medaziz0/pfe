import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http: HttpClient) {}

  getAllcontrats() {
    return this.http.get(environment.apiURL + "get-all-contrat");
  }

  getContratById(id) {
    return this.http.get(`${environment.apiURL}get-contrat/${id}`);
  }

  deleteContrat(id) {
    return this.http.delete(`${environment.apiURL}delete-contrat/${id}`);
  }

  addContrat(obj, appelOffreId) {
    return this.http.post(environment.apiURL + "create-contrat/" + appelOffreId, obj);
  }

  updateContrat(obj) {
    return this.http.put(environment.apiURL + "update-contrat", obj);
  }
}
