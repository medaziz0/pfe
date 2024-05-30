import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AoService } from 'src/app/services/ao.service';
import { ContratService } from 'src/app/services/contrat.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.scss']
})
export class EditContratComponent implements OnInit {
  updateContratForm: FormGroup;
  contrat: any = {};
  
  constructor(
    private formBuilder: FormBuilder,
    private contratService: ContratService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.contratService.getContratById(id).subscribe((data) => {
      this.contrat = data;
      // Remplir le formulaire avec les valeurs de l'emploi
      this.updateContratForm.patchValue({
        identity: this.contrat.identity,
        montant: this.contrat.montant,
        referenceContrat: this.contrat.referenceContrat,
      });
    });

    this.updateContratForm = this.formBuilder.group({
      identity: ["", [Validators.required]],
      montant: ["", [Validators.required]],
      referenceContrat: ["", [Validators.required]],
    });
  }

  onSubmit() {
    // Mettre à jour les valeurs de l'emploi avec les valeurs du formulaire
    this.contrat.identity = this.updateContratForm.value.identity;
    this.contrat.montant = this.updateContratForm.value.montant;
    this.contrat.referenceContrat = this.updateContratForm.value.referenceContrat;

    this.contratService.updateContrat(this.contrat).subscribe((response) => {
      this.router.navigate(["list"]);
    });
  }
}
