import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'shoping_car', component: Cart},
	// fallback to home for unknown routes (must be last)
	{ path: '**', redirectTo: '' },
];
