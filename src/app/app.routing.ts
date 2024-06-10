import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { AuthguardService } from "./services/authguard.service";
 // Import the AuthGuard

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
        canActivate: [AuthguardService] // Protecting admin routes
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
        canActivate: [AuthguardService] // Protecting projet routes
      },
      {
        path: "ao",
        loadChildren: () =>
          import("src/app/pages/gestion-ao/ao.module").then((m) => m.AoModule),
        canActivate: [AuthguardService] // Protecting ao routes
      },
      {
        path: "contrat",
        loadChildren: () =>
          import("src/app/pages/gestion-contrat/contrat.module").then(
            (m) => m.ContratModule
          ),
        canActivate: [AuthguardService] // Protecting contrat routes
      },
      {
        path: "facture",
        loadChildren: () =>
          import("src/app/pages/gestion-facture/facture.module").then(
            (m) => m.FactureModule
          ),
        canActivate: [AuthguardService] // Protecting facture routes
      },
      {
        path: "gestion-user",
        loadChildren: () =>
          import("./pages/gestion-user/gestion-user.module").then(
            (m) => m.GestionUserModule
          ),
        canActivate: [AuthguardService] // Protecting gestion-user routes
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
