import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AoService } from 'src/app/services/ao.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-list-ao',
  templateUrl: './list-ao.component.html',
  styleUrls: ['./list-ao.component.scss']
})
export class ListAOComponent implements OnInit {
  id: number;
  EmploiTable: any = [];  
  projetTab: any = [];
  appelOffresTab: any = [];
  test: Date = new Date();
  addprojetForm: FormGroup;
  constructor(private myRouter: Router,
    private emploiService: AoService,
    private pServie: ProjetService) { }

  ngOnInit() {
    this.emploiService.getAllemploi().subscribe((data) => {
      console.log("here appels d'offres", data);
      this.EmploiTable = data;
      this.pServie.getAllprojects().subscribe((projetsData) => {
        console.log("here projets", projetsData);
        this.projetTab = projetsData;
        this.appelOffresTab = this.EmploiTable.map((obj) => {
          const found = this.projetTab.find((item) => item.id === obj.pId);
          return { ...obj, projet: found };
        });
      });
    });
  }
  displayEmploi(id: number) {
    this.myRouter.navigate([`detailEmploi/${id}`]);
  }

  editEmploi(id: number) {
    this.myRouter.navigate([`editEmploi/${id}`]);
  }
  deleteEmploi(id: number) {
    this.emploiService.deleteEmploi(id).subscribe((response) => {
      this.emploiService.getAllemploi().subscribe((data) => {
        console.log("here data", data);
        this.EmploiTable = data;
      });
    });
  }

  getProject(pId) {}
}
