import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AttributeMasterComponent } from './attribute-master/attribute-master.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { ModuleComponent } from './module/module.component';
import { TransListComponent } from './trans-list/trans-list.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path:'module',component:ModuleComponent},
      {path:'report',component:TransListComponent},
      {path:'company',component:CompanyComponent},
      {path:'attribute',component:AttributeMasterComponent},
      {path:'user',component:UserComponent}
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
