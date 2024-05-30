import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AoService } from "src/app/services/ao.service";
import { ContratService } from "src/app/services/contrat.service";
import { FactureService } from "src/app/services/facture.service";
import { ProjetService } from "src/app/services/projet.service";

@Component({
  selector: "app-add-projet",
  templateUrl: "./detail-projet.component.html",
  styleUrls: ["./detail-projet.component.scss"],
})
export class DetailProjetComponent implements OnInit {
  projet: any;
  id: number;
  offresTab: any = [];
  contratTab: any = [];
  contratTabFilter: any = [];
  factureTab: any = [];
  filterAOTab: any = [];
  showTable: number = 0;
  projetTab: any = [];
  EmploiTable: any = [];
  FactureTable: any = [];
  ContratTable: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private projetService: ProjetService,
    private offreService: AoService,
    private contratService: ContratService,
    private factureService: FactureService,
    private myRouter: Router,
    private emploiService: AoService
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.projetService.getProjectById(id).subscribe((data) => {
      this.projet = data;
    });

    this.offreService.getAllemploi().subscribe((result: any) => {
      this.filterAOTab = result.filter((obj: any) => obj.projetId == id);
      console.log("here AppelsOffres", this.filterAOTab);

      this.contratService.getAllcontrats().subscribe((result: any) => {
        this.contratTabFilter = this.filterAOTab.map((ao) => {
          return {
            ao: ao,
            contrats: result.filter((contrat) => contrat.aoId === ao.id),
          };
        });

        console.log("contratTabFilter", this.contratTabFilter);
        
        this.factureService.getAllfacture().subscribe((facs: any) => {
          console.log("here factures tab", facs);
          const flatContrats = this.contratTabFilter.flatMap(item => item.contrats);

          this.factureTab = flatContrats.map((contrat) => {
            return {
              contrat: contrat,
              factures: facs.filter(
                (facture) => facture.contratId == contrat.id
              ),
            };
          });
          console.log("factureTab", this.factureTab);
        });
      });
    });
  }

  TableToShow(num: number) {
    if (num == 1) {
      this.showTable = 1;
    } else if (num == 2) {
      this.showTable = 2;
    } else {
      this.showTable = 0;
    }
  }

  editProjet(id: number) {
    console.log("ID du projet à éditer :", id);
    this.myRouter.navigate([`edit/${id}`]);
  }

  deleteProjet(id: number) {
    console.log("ID du projet à supprimer :", id);
    this.projetService.deleteProject(id).subscribe((response) => {
      this.projetService.getAllprojects().subscribe((data) => {
        console.log("Données après suppression :", data);
        this.projetTab = data;
      });
    });
  }

  editEmploi(id: number) {
    this.myRouter.navigate([`editAO/${id}`]);
  }
  deleteEmploi(id: number) {
    this.emploiService.deleteEmploi(id).subscribe((response) => {
      this.emploiService.getAllemploi().subscribe((data) => {
        console.log("here data", data);
        this.EmploiTable = data;
        window.location.reload();
      });
    });
  }

  editContrat(id: number) {
    this.myRouter.navigate([`editContrat/${id}`]);
  }
  deleteContrat(id: number) {
    this.contratService.deleteContrat(id).subscribe((response) => {
      this.contratService.getAllcontrats().subscribe((data) => {
        console.log("here data", data);
        this.ContratTable = data;
        window.location.reload();
      });
    });
  }

  editFacture(id: number) {
    this.myRouter.navigate([`editFacture/${id}`]);
  }
  deleteFacture(id: number) {
    this.factureService.deleteFacture(id).subscribe((response) => {
      this.factureService.getAllfacture().subscribe((data) => {
        console.log("here data", data);
        this.FactureTable = data;
        window.location.reload();
      });
    });
  }
}
