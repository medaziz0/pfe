import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) {}

  getAllfacture() {
    return this.http.get(environment.apiURL + "get-all-facture");
  }

  getFactureById(id) {
    return this.http.get(`${environment.apiURL}get-facture/${id}`);
  }

  deleteFacture(id) {
    return this.http.delete(`${environment.apiURL}delete-facture/${id}`);
  }

  addFacture(obj, contratId) {
    return this.http.post(environment.apiURL + "create-facture/" + contratId, obj);
  }

  updateFacture(obj) {
    return this.http.put(environment.apiURL + "update-facture", obj);
  }
}
