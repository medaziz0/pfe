import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AoService } from 'src/app/services/ao.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-edit-ao',
  templateUrl: './edit-ao.component.html',
  styleUrls: ['./edit-ao.component.scss']
})
export class EditAOComponent implements OnInit {
  updateEmploiForm: FormGroup;
  emploi: any = {};
  projetId:any;

  constructor(
    private formBuilder: FormBuilder,
    private emploiService: AoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.emploiService.getEmploiById(id).subscribe((data) => {
      this.emploi = data;
      // Remplir le formulaire avec les valeurs de l'emploi
      this.updateEmploiForm.patchValue({
        identity: this.emploi.identity,
        montant: this.emploi.montant,
        referenceAO: this.emploi.referenceAO,
      });
    });

    this.updateEmploiForm = this.formBuilder.group({
      identity: ["", [Validators.required]],
      montant: ["", [Validators.required]],
      referenceAO: ["", [Validators.required]],
    });
  }

  onSubmit() {
    // Mettre à jour les valeurs de l'emploi avec les valeurs du formulaire
    this.emploi.identity = this.updateEmploiForm.value.identity;
    this.emploi.montant = this.updateEmploiForm.value.montant;
    this.emploi.referenceAO = this.updateEmploiForm.value.referenceAO;

    this.emploiService.updateEmploi(this.emploi).subscribe((response) => {
      this.router.navigate(["list"]);
    });
  }

  selectAOId(evt){
    console.log(" evt.target.value;",  evt.target.value);
    
    this.projetId = evt.target.value;
  }
}
