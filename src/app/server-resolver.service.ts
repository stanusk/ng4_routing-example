import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ServersService } from './servers/servers.service';
import { MyServer } from './servers/server/server.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerResolver implements Resolve<MyServer> {
	constructor (private serversService: ServersService) {}

	resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MyServer | Promise<MyServer> | Observable<MyServer> {
		return this.serversService.getServerAsync(+route.params['id']);
	}

}
