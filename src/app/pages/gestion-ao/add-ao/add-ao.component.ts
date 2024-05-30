import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AoService } from 'src/app/services/ao.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-add-ao',
  templateUrl: './add-ao.component.html',
  styleUrls: ['./add-ao.component.scss']
})
export class AddAOComponent implements OnInit {
  test: Date = new Date();
  addAOForm: FormGroup;
  projets:any = [];
  projetId:any;
  constructor(private formBuilder: FormBuilder,
    private emploiService: AoService,
    private router:Router,
    private projetService: ProjetService) { }

  ngOnInit() {
    this.projetService.getAllprojects().subscribe(
      (data)=>{
        console.log("data in add appel ", data);
        this.projets = data;
      }
    )
    this.addAOForm = this.formBuilder.group({
      identity: ["", [Validators.required]],
      montant: ["", [Validators.required]],
      referenceAO: ["", [Validators.required]],
      projetId: ["", [Validators.required]],
      });
  }
  

  onSubmit() {
    console.log("here object", this.addAOForm.value);
    this.emploiService
      .addEmploi(this.addAOForm.value, this.projetId)
      .subscribe((response) => {
        console.log("here response", response);
        this.router.navigate(["list"])
      });
  }

  selectProjetId(evt){
    console.log(" evt.target.value;",  evt.target.value);
    
    this.projetId = evt.target.value;
  }
}
