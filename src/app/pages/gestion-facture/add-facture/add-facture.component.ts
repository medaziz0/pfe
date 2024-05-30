import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AoService } from 'src/app/services/ao.service';
import { ContratService } from 'src/app/services/contrat.service';
import { FactureService } from 'src/app/services/facture.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.scss']
})
export class AddFactureComponent implements OnInit {
  test: Date = new Date();
  addFactureForm: FormGroup;
  contrat:any = [];
  contratId:any;
  constructor(private formBuilder: FormBuilder,
    private emploiService: AoService,
    private router:Router,
    private projetService: ProjetService,
    private contratService: ContratService,
    private factureService: FactureService) { }

  ngOnInit() {
    this.contratService.getAllcontrats().subscribe(
      (data)=>{
        console.log("data in add appel ", data);
        this.contrat = data;
      }
    )
    this.addFactureForm = this.formBuilder.group({
      identity: ["", [Validators.required]],
      montant: ["", [Validators.required]],
      referenceFacture: ["", [Validators.required]],
      contratId: ["", [Validators.required]],
      });
  }
  onSubmit() {
    console.log("here object", this.addFactureForm);
    this.factureService
      .addFacture(this.addFactureForm.value, this.contratId)
      .subscribe((response) => {
        console.log("here response", response);
        this.router.navigate(["list"])
      });
  }

  selectContratId(evt){
    console.log(" evt.target.value;",  evt.target.value);
    
    this.contratId = evt.target.value;
  }
}
