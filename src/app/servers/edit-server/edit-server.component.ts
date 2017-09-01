import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanDeactivateGuard } from '../../can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-edit-server',
	templateUrl: './edit-server.component.html',
	styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
	server: { id: number, name: string, status: string };
	serverName = '';
	serverStatus = '';
	allowEdit = false;
	changesSaved = false;

	constructor (
		private serversService: ServersService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit () {
		this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
		this.serverName = this.server.name;
		this.serverStatus = this.server.status;

		this.route.queryParams.subscribe(params => {
			const allow = params['allowEdit'];
			this.allowEdit = allow && !!(+allow);
		});
		this.route.fragment.subscribe();
	}

	onUpdateServer () {
		this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
		this.changesSaved = true;
		this.router.navigate(['../'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
	}

	canDeactivate (): boolean | Observable<boolean> | Promise<boolean> {
		if (this.noChanges() || this.changesSaved === true) {
			return true;
		} else {
			return confirm('Discard unsaved changes?');
		}
	}

	private noChanges (): boolean {
		return this.allowEdit === false ||
			(this.serverName === this.server.name && this.serverStatus === this.server.status);
	}

}
