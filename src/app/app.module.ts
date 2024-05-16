import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UniteComponent } from './pages/unite/unite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListeUnitesComponent } from './pages/liste-unite/liste-unite.component';
import { UserComponent } from './pages/user/user.component';
import { ListeUserComponent } from './pages/liste-user/liste-user.component';
import { ModifierUniteComponent } from './pages/modifier-unite/modifier-unite.component';
import { ModifierGroupeComponent } from './pages/modifier-groupe/modifier-groupe.component';
import { ModifierUserComponent } from './pages/modifier-user/modifier-user.component';
import { GroupeComponent } from './pages/groupe/groupe.component';
import { HttpClientModule } from '@angular/common/http';
import { UnitedetailsComponent } from './pages/unitedetails/unitedetails.component';
import { UserdtailsComponent } from './pages/userdtails/userdtails.component';
import { GroupedetailsComponent } from './pages/groupedetails/groupedetails.component';
import { AuthService } from './auth.service';
import { UniteService } from './services/unite.service ';
import { GroupeService } from './services/groupe.service';
import { RouterService } from './services/router.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UniteComponent,
    ListeUnitesComponent,
    UserComponent,
    ListeUserComponent,
    ModifierUniteComponent,
    ModifierGroupeComponent,
    ModifierUserComponent,
  
    GroupeComponent,
    UnitedetailsComponent,
    UserdtailsComponent,
    GroupedetailsComponent,
  
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [AuthService,UniteService,UniteService,GroupeService,RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
