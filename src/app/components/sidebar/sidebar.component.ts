import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
  },
  { path: "/maps", title: "Maps", icon: "ni-pin-3 text-orange", class: "" },
  {
    path: "/list",
    title: "Projets",
    icon: "ni-bullet-list-67 text-red",
    class: "",
  },
  // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  {
    path: "/register",
    title: "Gestion des utilisateurs",
    icon: "ni-circle-08 text-pink",
    class: "",
  },
];

export const ROUTESuser: RouteInfo[] = [
  // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: "/maps", title: "Maps", icon: "ni-pin-3 text-orange", class: "" },
  {
    path: "/list",
    title: "Projets",
    icon: "ni-bullet-list-67 text-red",
    class: "",
  },
  // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
];
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuAdminItems: any[];
  public menuUserItems: any[];
  public isCollapsed = true;
  role: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.role = JSON.parse(sessionStorage.getItem("auth-user")).roles[0];
    console.log("here role", this.role);
    if (this.role == "ROLE_USER") {
      this.menuUserItems = ROUTESuser.filter((menuItem) => menuItem);
    } else {
      this.menuUserItems = ROUTES.filter((menuItem) => menuItem);
    }
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  logout() {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("auth-user");
    this.router.navigate(["login"]);
  }
}
