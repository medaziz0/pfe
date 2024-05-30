import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.scss']
})
export class ListContratComponent implements OnInit {
  projetTab: any = [];
  ProjetTab : any;
  test: Date = new Date();
  addprojetForm: FormGroup;
  constructor(private myRouter: Router,
    private projetService: ProjetService,
    private pServie: ProjetService) { }

  ngOnInit() {
    this.ProjetTab= JSON.parse(localStorage.getItem("projet") || "[]");
    this.projetService.getAllprojects().subscribe((data) => {
      // Assignation des données récupérées à la variable projetTab
      this.projetTab = data;
    });
  }
  displayProjet(id: number) {
    console.log("ID du projet à afficher :", id);
    this.myRouter.navigate([`detail/${id}`]);
  }
  
  editProjet(id: number) {
    console.log("ID du projet à éditer :", id);
    this.myRouter.navigate([`editProjet/${id}`]);
  }
  
  deleteProjet(id: number) {
    console.log("ID du projet à supprimer :", id);
    this.projetService.deleteProject(id).subscribe((response) => {
      this.projetService.getAllprojects().subscribe((data) => {
        console.log("Données après suppression :", data);
        this.projetTab = data;
      });
    });
  }
}
