
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// da sa to aj s komponentom - miesto interface v classe priamo uvadzam class componentu
// okrem toho mozem spustat metodu canDeactivate aj akehokolvek service, ktory sem injectnem (ale to je asi menej zrejme
// potom z pohladu do componentu
export interface CanDeactivateComponent {
	canDeactivate(): boolean | Observable<boolean> | Promise<boolean>;
}

export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
	canDeactivate (
		component: CanDeactivateComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): boolean | Promise<boolean> | Observable<boolean> {
		return component.canDeactivate();
	}
}
