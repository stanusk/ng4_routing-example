
import { NgModule } from '@angular/core';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { PageErrorComponent } from './page-error/page-error.component';
import { ServerResolver } from './server-resolver.service';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'users/:id/:name', component: UserComponent },
	{
		path: 'servers',
		component: ServersComponent,
		canActivateChild: [
			AuthGuard
		],
		children: [
			{ path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
			{
				path: ':id/edit',
				canDeactivate: [
					CanDeactivateGuard
				],
				component: EditServerComponent
			},
		]
	},
	// { path: 'not-found', component: PageNotFoundComponent },
	{ path: 'not-found', component: PageErrorComponent, data: {errorMessage: 'Whoopsieeee, something\'s fucked up..'} },
	{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
	imports: [
		// RouterModule.forRoot(appRoutes, {useHash: true})
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	providers: [
		AuthGuard,
		CanDeactivateGuard,
		ServerResolver
	]
})
export class AppRoutingModule {}
