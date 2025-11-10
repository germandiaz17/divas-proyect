import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
	{ path: '', component: Home },
	// fallback to home for unknown routes
	{ path: '**', redirectTo: '' }
];
