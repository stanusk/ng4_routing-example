import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor (
		private router: Router,
		private auth: AuthService
	) { }

	ngOnInit () {
	}

	loadServers (id: number) {
		this.router.navigate(
			['/servers', id, 'edit'],
			{
				queryParams: {allowEdit: 0},
				fragment: 'loaded'
			}
		);
	}

	logIn () {
		this.auth.logIn();
	}

	logOut () {
		this.auth.logOut();
	}

}
