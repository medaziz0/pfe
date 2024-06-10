import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import * as L from "leaflet";
import { ProjetService } from "src/app/services/projet.service";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit {
  map: L.Map | undefined;
  selectedProject: any;
  projects: any[];
  customIcon: any;
  constructor(private http: HttpClient,private projetService:ProjetService) {}

  ngOnInit() {
    this.customIcon = L.icon({
      iconUrl: 'assets/img/icons/marker-icon.png', 
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -45],
    });
    
    this.initializeMap();
    this.projetService.getAllprojects().subscribe(res=>{
      if(res){
        this.projects = res;
      }
    })
  }
  initializeMap(): void {
    if (!this.map) {
      this.map = L.map('map').setView([40.748817, -73.985428], 13);

      L.tileLayer('https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=gOsCSxGO72AoO6H5J1NL', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1
      }).addTo(this.map);
    }
  }
  getMarkerByProject(mapByProject: any) {
    console.log("im here")
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map!.removeLayer(layer);
      }
    }); 
    if(mapByProject != null){
      L.marker([mapByProject.lat, mapByProject.lng], {icon: this.customIcon})
      .addTo(this.map!)
      .bindPopup("Marker");
      this.map!.setView([mapByProject.lat, mapByProject.lng], 15);
    }
    
      
  }

  onSelect(projectId: any): void {
    this.selectedProject = projectId;

    this.projetService.getMarkerByProjectId(projectId)
      .subscribe((res) => {
        if (res) {
          console.log(res)
          this.getMarkerByProject(res);
        }else{
          this.getMarkerByProject(null);
        }
      },
      (error)=>{
        this.getMarkerByProject(null);
      }
    );
  }
}
