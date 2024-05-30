import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor(private http: HttpClient) { }

  getMarkerByProjectId(projectId:any){
    return this.http
    .get("http://localhost:8081/marker/findByProjectId/" + projectId);
  }

  getAllprojects() {
    return this.http.get<any[]>(environment.apiURL + "get-all-Projet");
  }

  getAllprojectsWithAppelOffres() {
    return this.http.get(environment.apiURL + "get-all-Projet");
  }
  
  getProjectById(id) {
    return this.http.get(`${environment.apiURL}get-projet/${id}`);
  }

  deleteProject(id) {
    return this.http.delete(`${environment.apiURL}delete-projet/${id}`);
  }

  addProject(obj,marker) {
    const dto = {
      obj: obj,
      marker: marker
    };
    return this.http.post(environment.apiURL + "create-projet", dto);
  }

  updateProject(obj) {
    return this.http.put(environment.apiURL+ "update-projet", obj);
  }
}
