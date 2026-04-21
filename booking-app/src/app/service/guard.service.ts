import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requireAdmin = route.data['requiresAdmin'] || false;

    if(requireAdmin) {
      if(this.apiService.isAdmin()) {
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: {return: state.url}
        });
        return false;
      }
    } else {
      if(this.apiService.isAuthenticated()) {
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: {returnUrl: state.url}
        });
        return false;
      }
    }
  }
}
