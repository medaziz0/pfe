import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.scss']
})
export class EditProjetComponent implements OnInit {
  editprojetForm: FormGroup;
  projet: any = {};
  
  constructor(
    private formBuilder: FormBuilder,
    private projetService: ProjetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.projetService.getProjectById(id).subscribe((data) => {
      this.projet = data;
      
      // Remplir le formulaire avec les valeurs du projet
      this.editprojetForm.patchValue({
        intituly: this.projet.intituly,
        dateDebut: this.projet.dateDebut,
        dateFin: this.projet.dateFin,
        projetRef: this.projet.projetRef,
        description: this.projet.description,
        cout: this.projet.cout,
        lieu: this.projet.lieu,
      });
    });

    this.editprojetForm = this.formBuilder.group({
      intituly: ["", [Validators.required]],
      dateDebut: ["", [Validators.required]],
      dateFin: ["", [Validators.required]],
      projetRef: ["", [Validators.required]],
      description: ["", [Validators.required]],
      cout: ["", [Validators.required]],
      lieu: ["", [Validators.required]],
    });
  }

  onSubmit() {
    // Mettre à jour les valeurs du projet avec les valeurs du formulaire
    console.log('Form values before update:', this.editprojetForm.value); // Ajoutez cette ligne pour vérifier les valeurs du formulaire
    this.projet.intituly = this.editprojetForm.value.intituly;
    this.projet.dateDebut = this.editprojetForm.value.dateDebut;
    this.projet.dateFin = this.editprojetForm.value.dateFin;
    this.projet.projetRef = this.editprojetForm.value.projetRef;
    this.projet.description = this.editprojetForm.value.description;
    this.projet.cout = this.editprojetForm.value.cout;
    this.projet.lieu = this.editprojetForm.value.lieu;
  
    this.projetService.updateProject(this.projet).subscribe(
      (response) => {
        console.log('Response from update:', response); // Ajoutez cette ligne pour vérifier la réponse du serveur
        this.router.navigate(["list"]);
      },
      (error) => {
        console.error('Error updating project:', error); // Ajoutez cette ligne pour vérifier les erreurs éventuelles
      }
    );
  }
  
}
