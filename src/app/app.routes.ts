import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Menu } from './pages/menu/menu';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'menu', component: Menu },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
