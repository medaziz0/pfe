import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/auth-layout/auth-layout.module").then(
            (m) => m.AuthLayoutModule
          ),
      },
      {
        path: "projet",
        loadChildren: () =>
          import("src/app/pages/gestion-projet/projet.module").then(
            (m) => m.ProjetModule
          ),
      },
      {
        path: "ao",
        loadChildren: () =>
          import("src/app/pages/gestion-ao/ao.module").then((m) => m.AoModule),
      },
      {
        path: "contrat",
        loadChildren: () =>
          import("src/app/pages/gestion-contrat/contrat.module").then(
            (m) => m.ContratModule
          ),
      },
      {
        path: "facture",
        loadChildren: () =>
          import("src/app/pages/gestion-facture/facture.module").then(
            (m) => m.FactureModule
          ),
      },
    ],
  },
  
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
