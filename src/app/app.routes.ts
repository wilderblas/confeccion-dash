import { Routes } from '@angular/router';
import DashboardComponent from './components/dashboard/dashboard.component';
import AuthComponent from './components/auth/auth.component';
import CrudComponent from './components/crud/crud.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:'', component:DashboardComponent},    
    {path:'auth', component:AuthComponent},
    {path:'register', component:RegisterComponent},    
    {path:'', redirectTo:'', pathMatch:'full'}
];
