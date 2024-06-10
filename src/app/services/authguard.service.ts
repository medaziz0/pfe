import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private authService: AuthentificationService, private router: Router,private tokenService:TokenStorageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.tokenService.getToken() != null) {
      return true;
    } else {
      console.log("fiik heee")
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }
}
