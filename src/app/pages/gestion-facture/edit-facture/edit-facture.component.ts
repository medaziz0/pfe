import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AoService } from 'src/app/services/ao.service';
import { FactureService } from 'src/app/services/facture.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-edit-facture',
  templateUrl: './edit-facture.component.html',
  styleUrls: ['./edit-facture.component.scss']
})
export class EditFactureComponent implements OnInit {
  updateFactureForm: FormGroup;
  facture: any = {};
  
  constructor(
    private formBuilder: FormBuilder,
    private factureService: FactureService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.factureService.getFactureById(id).subscribe((data) => {
      this.facture = data;
      // Remplir le formulaire avec les valeurs de l'facture
      this.updateFactureForm.patchValue({
        identity: this.facture.identity,
        montant: this.facture.montant
      });
    });

    this.updateFactureForm = this.formBuilder.group({
      identity: ["", [Validators.required]],
      montant: ["", [Validators.required]],
    });
  }

  onSubmit() {
    // Mettre à jour les valeurs de l'facture avec les valeurs du formulaire
    this.facture.identity = this.updateFactureForm.value.identity;
    this.facture.montant = this.updateFactureForm.value.montant;

    this.factureService.updateFacture(this.facture).subscribe((response) => {
      this.router.navigate(["list"]);
    });
  }
}
