import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
	user: { id: number, name: string };

	private subscriptions: Subscription[] = [];

	constructor (private route: ActivatedRoute) { }

	ngOnInit () {
		this.unsubscribeOnDestroy([
			this.route.params.subscribe((params: any) => this.user = {id: params.id, name: params.name})
		]);
		// this.user = {
		// 	id: this.route.snapshot.params['id'],
		// 	name: this.route.snapshot.params['name']
		// };
	}

	unsubscribeOnDestroy (subscriptions: Array<Subscription>) {
		this.subscriptions.push(...subscriptions);
	}

	ngOnDestroy () {
		this.subscriptions.forEach(s => s.unsubscribe());
	}

}
