import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProjetService } from "src/app/services/projet.service";
import { ChangeDetectorRef } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-add-projet",
  templateUrl: "./add-projet.component.html",
  styleUrls: ["./add-projet.component.scss"],
})
export class AddProjetComponent implements OnInit {
  latitude: number = 0.0;
  longitude: number = 0.0;
  display: boolean = false;
  test: Date = new Date();
  addprojetForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private projetService: ProjetService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.addprojetForm = this.formBuilder.group({
      intituly: ["", [Validators.required]],
      dateDebut: ["", [Validators.required]],
      dateFin: ["", [Validators.required]],
      projetRef: ["", [Validators.required]],
      description: ["", [Validators.required]],
      cout: ["", [Validators.required]],
      lieu: ["", [Validators.required]],
    });
  }
  showDialog() {
    this.display = true;
  }
  onSubmit() {
    console.log("here object", this.addprojetForm.value);
    let marker = {
      lat: this.latitude,
      lng: this.longitude,
    };
    this.projetService
      .addProject(this.addprojetForm.value, marker)
      .subscribe((response) => {
        console.log("here response", response);
        // Set the URL with the desired path including the #
        const urlWithPath = window.location.origin + "/#/list";
        window.location.href = urlWithPath;

        // Reload the window
        window.location.reload();
        // this.messageService.add({
        //   severity: "success",
        //   summary: "Success",
        //   detail: "Operation successful",
        // });
        this.display = false;
        this.cdr.detectChanges();
      });
  }
  onCancel() {
    this.display = false;
    this.cdr.detectChanges();
  }
}
