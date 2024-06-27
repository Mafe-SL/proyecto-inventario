import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let response = true;
    console.log(this.authService.isAuthenticatedUser());

    if (!this.authService.isAuthenticatedUser()){
      this.router.navigate(['/inicio']);
      response=false
    }
    return response;
  }
}
