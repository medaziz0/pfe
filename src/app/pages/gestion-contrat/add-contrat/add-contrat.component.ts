import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AoService } from 'src/app/services/ao.service';
import { ContratService } from 'src/app/services/contrat.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.scss']
})
export class AddContratComponent implements OnInit {
  test: Date = new Date();
  addcontratForm: FormGroup;
  ao:any = [];
  AOId:any;
  constructor(private formBuilder: FormBuilder,
    private emploiService: AoService,
    private router:Router,
    private projetService: ProjetService,
    private contratService: ContratService) { }

  ngOnInit() {
    this.emploiService.getAllemploi().subscribe(
      (data)=>{
        console.log("data in add appel ", data);
        this.ao = data;
      }
    )
    this.addcontratForm = this.formBuilder.group({
      identity: ["", [Validators.required]],
      montant: ["", [Validators.required]],
      referenceContrat: ["", [Validators.required]],
      aoId: ["", [Validators.required]],
      });
  }
  onSubmit() {
    console.log("here object", this.addcontratForm.value);
    this.contratService
      .addContrat(this.addcontratForm.value, this.AOId)
      .subscribe((response) => {
        console.log("here response", response);
        this.router.navigate(["list"])
      });
  }

  selectAOId(evt){
    console.log(" evt.target.value;",  evt.target.value);
    
    this.AOId = evt.target.value;
  }
}
