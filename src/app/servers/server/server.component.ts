import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
	server: MyServer;

	constructor (
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit () {
		this.route.data.subscribe((data: Data) => {
			this.server = data['server'];
		});
	}

	edit () {
		this.router.navigate(
			['edit'],
			{
				relativeTo: this.route,
				queryParamsHandling: 'preserve'
			}
		);
	}
}

export interface MyServer {
	id: number;
	name: string;
	status: string;
}
