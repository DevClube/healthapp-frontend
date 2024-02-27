import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './view/home/home.component';
import { PredictionComponent } from './view/prediction/prediction.component';



export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prediction', component: PredictionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: NotFoundComponent, pathMatch: 'full' },

];