import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-page-error',
	templateUrl: './page-error.component.html',
	styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {
	errorMessage: string;
	constructor (private route: ActivatedRoute) { }

	ngOnInit () {
		this.errorMessage = this.route.snapshot.data['errorMessage'];
	}

}
