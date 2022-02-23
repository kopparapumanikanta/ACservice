import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NavhomeComponent } from './components/navhome/navhome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MybookingsComponent } from './components/mybookings/mybookings.component';
const routes: Routes = [
  {path:'',component : SignupComponent},
  {path:'signin', component : SigninComponent},
  {path:'home', component: HomeComponent},
  {path:'navhome', component: NavhomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'mybookings', component: MybookingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [SignupComponent,SigninComponent,HomeComponent,NavhomeComponent,DashboardComponent,MybookingsComponent]
