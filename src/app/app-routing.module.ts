import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UniteComponent } from './pages/unite/unite.component';
import { ListeUnitesComponent } from './pages/liste-unite/liste-unite.component';
import { ListeUserComponent } from './pages/liste-user/liste-user.component';
import { UserComponent } from './pages/user/user.component';

import { ExemplesComponent } from './pages/exemples/exemples.component';
import { ModifierUniteComponent } from './pages/modifier-unite/modifier-unite.component';
import { ListeGroupeComponent } from './pages/liste-groupe/liste-groupe.component';
import { GroupeComponent } from './pages/groupe/groupe.component';
import { ModifierUserComponent } from './pages/modifier-user/modifier-user.component';
import { ModifierGroupeComponent } from './pages/modifier-groupe/modifier-groupe.component';
import { UnitedetailsComponent } from './pages/unitedetails/unitedetails.component';
import { UserdtailsComponent } from './pages/userdtails/userdtails.component';
import { GroupedetailsComponent } from './pages/groupedetails/groupedetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'unite', component: UniteComponent },
  { path: 'liste-unite', component: ListeUnitesComponent },
  { path: 'liste-user', component: ListeUserComponent },
  { path: 'user', component: UserComponent },
  { path: 'modifier-unite', component: ModifierUniteComponent },
  { path: 'exemples', component: ExemplesComponent },
  { path: 'liste-groupe', component: ListeGroupeComponent },
  { path: 'groupe', component: GroupeComponent },
  { path: 'modifier-user', component: ModifierUserComponent },
  {path:'modifier-groupe', component:ModifierGroupeComponent},
  { path: 'unitedetails', component: UnitedetailsComponent },
  { path: 'userdtails', component: UserdtailsComponent },
  { path: 'groupedetails', component: GroupedetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
