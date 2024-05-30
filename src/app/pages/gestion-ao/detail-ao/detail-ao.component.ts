import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-detail-ao',
  templateUrl: './detail-ao.component.html',
  styleUrls: ['./detail-ao.component.scss']
})
export class DetailAOComponent implements OnInit {
  projet:any;
  id:number;
  constructor( private activatedRoute: ActivatedRoute,
    private projetService:ProjetService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.projetService.getProjectById(id).subscribe(
      (data)=>{
        this.projet = data;
      }
    )
  }
 
}
