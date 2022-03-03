import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleComponent } from './module/module.component';
import { TransListComponent } from './trans-list/trans-list.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path:'module',component:ModuleComponent},
      {path:'report',component:TransListComponent},
      {path:'company',component:CompanyComponent}
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
