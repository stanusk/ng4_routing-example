
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor (
		private auth: AuthService,
		private router: Router
	) {}

	canActivate (
		route: ActivatedRouteSnapshot, state: RouterStateSnapshot
	): boolean | Promise<boolean> | Observable<boolean> {
		return this.auth.isAuthenticated()
			.then(isAuth => {
				if (isAuth) {
					return true;
				} else {
					this.router.navigate(['/']);
					return false;
				}
			});
	}

	canActivateChild (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
		return this.canActivate(route, state);
	}
}
