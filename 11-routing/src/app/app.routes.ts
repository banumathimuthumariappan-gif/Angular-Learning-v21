import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Students } from './pages/students/students';
import { StudentsList } from './pages/students-list/students-list';
import { StudentsDetails } from './pages/students-details/students-details';
import { NotFound } from './pages/not-found/not-found';
import { Admin } from './pages/admin/admin';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
    {
        path: 'students',
        component: Students,
        children: [
            {
                path: '',
                component: StudentsList
            },
            {
                path: ':id',
                component: StudentsDetails
            }
        ]
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin').then(m => m.Admin),
        canActivate: [authGuard]

    },
    {
        path: '**', // Wildcard route
        component: NotFound
    }
];
