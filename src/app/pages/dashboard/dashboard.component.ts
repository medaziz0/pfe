import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "../../variables/charts";
import { ProjetService } from "src/app/services/projet.service";
import { AoService } from "src/app/services/ao.service";
import { ContratService } from "src/app/services/contrat.service";
import { FactureService } from "src/app/services/facture.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  projetsNbr: number;
  aoNbr: any;
  contratsNbr: any;
  facturesNbr: any;

  constructor(
    private projetService: ProjetService,
    private aoService: AoService,
    private factureService: FactureService,
    private contratService: ContratService
  ) {}
  ngOnInit() {
    this.projetService.getAllprojects().subscribe((res) => {
      this.projetsNbr = res.length;
      this.aoService.getAllemploi().subscribe((result) => {
        this.aoNbr = result;
        this.contratService.getAllcontrats().subscribe((res) => {
          this.contratsNbr = res;
          this.factureService.getAllfacture().subscribe((res) => {
            this.facturesNbr = res;
      
            this.datasets = [
              [0, 20, 10, 30, 15, 40, 20, 60, 60],
              [0, 20, 5, 25, 10, 30, 15, 40, 40],
            ];
            this.data = this.datasets[0];
      
            var chartOrders = document.getElementById("chart-orders");
      
            parseOptions(Chart, chartOptions());
      
            var updatedData = [
              this.projetsNbr,
              this.aoNbr.length,
              this.contratsNbr.length,
              this.facturesNbr.length,
            ];
            var myData = {
              labels: ["Projets", "Appels Offres", "Contrats", "Factures"],
              datasets: [
                {
                  label: "Sales",
                  data: updatedData,
                  maxBarThickness: 10,
                },
              ],
            };
            var ordersChart = new Chart(chartOrders, {
              type: "bar",
              options: chartExample2.options,
              data: myData,
            });
      
            var chartSales = document.getElementById("chart-sales");
      
            this.salesChart = new Chart(chartSales, {
              type: "line",
              options: chartExample1.options,
              data: chartExample1.data,
            });
          });
        });
      });
    });
    
    
    
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
}
